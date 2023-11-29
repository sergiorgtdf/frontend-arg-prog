import axios from "./setCredentials";

// GET ALL TASKS
export const getTasks = () => {
    try {
        return axios.get(`/task`);
    } catch (error) {
        console.log(error);
    }
};

// GET TASK BY ID
export const getTaskById = (id) => {
    try {
        return axios.get(`/task/${id}`);
    } catch (error) {
        console.log(error);
    }
};

// CREATE TASK
export const createTask = (payload) => {
    try {
        return axios.post(`/task`, payload);
    } catch (error) {
        console.log(error);
    }
};

// UPDATE TASK
export const updateTask = (id, payload) => {
    try {
        return axios.put(`/task/${id}`, payload);
    } catch (error) {
        console.log(error);
    }
};

// DELETE TASK
export const deleteTask = (id) => {
    try {
        return axios.delete(`/task/${id}`);
    } catch (error) {
        console.log(error);
    }
};
