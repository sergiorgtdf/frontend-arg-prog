import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TasksContext";

const TaskFormPg = () => {
    const { register, handleSubmit } = useForm();

    const { addTask } = useTasks();
    console.log(addTask());

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                    <form>
                        <input
                            type="text"
                            placeholder="title"
                            {...register(`tittle`)}
                            className="w-full bg-zinc-700 text-white px-3 py-2 rounded-md my-2"
                            autoFocus
                        />
                        <textarea
                            rows="10"
                            placeholder="description"
                            className="w-full bg-zinc-700 text-white px-3 py-2 rounded-md my-2"
                            {...register(`description`)}
                        />
                        <button
                            onClick={onSubmit}
                            className="h-10 px-6  font-semibold rounded-md bg-green-500 text-white my-3 align-content">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default TaskFormPg;
