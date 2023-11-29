import { createContext, useContext, useState } from "react";

// Importa las rutas de axios
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
        throw new Error("Error! Context not found");
    }
    return context;
};

export function TaskProvider({ children }) {
    const [task, setTask] = useState([]);

    // Obtieene las tareas
    const getTask = async () => {
        const resp = await getTasks();
        console.log(resp);
        setTask(resp.data);
    };

    const taskById = async (id) => {
        try {
            const resp = await getTaskById(id);
            console.log(resp);
            setTask([...task, resp.data]);
        } catch (error) {
            console.log(error);
        }
    };
    // Crear tarea
    const addTask = async (task) => {
        const resp = await createTask(task);
        setTask(resp.data);
    };

    const editTask = async (id, task) => {
        const resp = await updateTask(id, task);
        console.log(resp);
        setTask([...task, resp.data]);
    };

    const delTask = async (task) => {
        const resp = await deleteTask(task);
        console.log(resp);
        setTask([...task, resp.data]);
    };

    return (
        <TaskContext.Provider
            value={{
                task,
                getTask,
                taskById,
                addTask,
                editTask,
                delTask,
            }}>
            {children}
        </TaskContext.Provider>
    );
}
