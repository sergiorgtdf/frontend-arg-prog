import { useForm } from "react-hook-form";

const TaskFormPg = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    {...register(`tittle`)}
                    className="w-full bg-zinc-700 text-white px-3 py-2 rounded-md my-2"
                    autoFocus
                />
                <textarea
                    rows="10"
                    placeholder="Description"
                    className="w-full bg-zinc-700 text-white px-3 py-2 rounded-md my-2"
                    {...register(`description`)}
                />
                <button className="text-white">Save</button>
            </form>
        </div>
    );
};

export default TaskFormPg;
