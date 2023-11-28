import { createContext, useContext, useState } from "react";

import {
    createTask,
    updateTask,
    deleteTask,
    getTasks,
    getTaskById,
} from "../api/tasksAxios";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("Error en el contexto de tareas");
    }
    return context;
};

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    // Obtieene las tareas
    const getTask = async () => {
        const resp = await getTasks();
        console.log(resp);
        setTasks([...tasks, resp.data]);
    };

    const getTaskById = async (id) => {
        const resp = await getTaskById(id);
        console.log(resp);
        setTasks([...tasks, resp.data]);
    };
    // Crear tarea
    const addTask = async (task) => {
        const resp = await createTask(task);
        console.log(resp);
        setTasks([...tasks, resp.data]);
    };

    const editTask = async (task) => {
        const resp = await updateTask(task);
        console.log(resp);
        setTasks([...tasks, resp.data]);
    };

    const delTask = async (task) => {
        const resp = await deleteTask(task);
        console.log(resp);
        setTasks([...tasks, resp.data]);
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                getTask,
                getTaskById,
                addTask,
                editTask,
                delTask,
            }}>
            {children}
        </TaskContext.Provider>
    );
}
