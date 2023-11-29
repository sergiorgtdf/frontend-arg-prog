import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { updateTask } from "../../api/tasksAxios";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const TaskFormPg = () => {
    const { register, handleSubmit, setValue } = useForm();

    //Funciones CRUD
    const { task, addTask, taskById } = useTasks();
    console.log(task);

    // Si viene un id, entonces es una cargar datos a editar
    const params = useParams();
    useEffect(() => {
        async function loadTask() {
            console.log("Id Tarea taskFormPg", params.id);
            if (params.id) {
                const taskFound = taskById(params.id);
                console.log(taskFound);
                setValue("title", taskFound.title);
                setValue("description", taskFound.description);
                setValue("completed", taskFound.completed);
            }
        }
        loadTask();
    }, []);
    // Guarda o Actualiza ls datos
    const Navigate = useNavigate();
    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            // Si hay id, entonces es una actualización
            updateTask(params.id, {
                ...data,
                date: dayjs.utc(data.date).format(),
            });
        } else {
            // Si no hay id, entonces es una nueva tarea
            addTask({ ...data, date: dayjs.utc(data.date).format() });
        }
        Navigate("/tasks");
    });
    return (
        <>
            <div>
                <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                    <form onSubmit={onSubmit}>
                        <input
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                            type="text"
                            placeholder="Titulo"
                            {...register("title")}
                            autoFocus
                        />
                        <textarea
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                            rows="3"
                            placeholder="Descripción"
                            {...register("description")}></textarea>
                        <input type="date" />

                        <label>Completado</label>
                        <input type="checkbox" {...register("completed")} />
                        <button
                            className="flex h-10 px-6 font-semibold rounded-md bg-green-900 text-white my-5"
                            type="submit">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default TaskFormPg;
