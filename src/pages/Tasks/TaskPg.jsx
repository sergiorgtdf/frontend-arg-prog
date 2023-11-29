import { useEffect } from "react";
// import NavbarPrivate from "../../components/NavBar/NavbarPrivate";
import { useTasks } from "../../context/TasksContext";
import { TaskCard } from "../../components/TaskCard";

const TaskPg = () => {
    const { getTask, task } = useTasks();

    useEffect(() => {
        getTask();
    }, []);

    if (task.length === 0)
        return (
            <>
                <h1 className="text-3xl font-bold text-center">
                    No hay tareas
                </h1>
            </>
        );

    return (
        <>
            <h1 className="text-3xl font-bold text-center">Task</h1>
            <button
                onClick={"/newtask"}
                className="flex h-10 px-6 font-semibold rounded-md bg-green-900 text-white my-5">
                New Task
            </button>
            <div className="grid grid-cols-3 gap-4">
                {task.map((task, i) => (
                    <TaskCard task={task} key={i} />
                ))}
            </div>
        </>
    );
};

export default TaskPg;
