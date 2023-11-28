import axios from "./setCredentials";

// GET ALL TASKS
export const getTasks = () => {
    try {
        return axios.get(`/api/getAllTask`);
    } catch (error) {
        console.log(error);
    }
};

// GET TASK BY ID
export const getTaskById = (id) => {
    try {
        return axios.get(`/api/getTaskById/${id}`);
    } catch (error) {
        console.log(error);
    }
};

// CREATE TASK
export const createTask = (payload) => {
    try {
        return axios.post(`/api/task`, payload);
    } catch (error) {
        console.log(error);
    }
};

// UPDATE TASK
export const updateTask = (id, payload) => {
    try {
        return axios.put(`/api/task/${id}`, payload);
    } catch (error) {
        console.log(error);
    }
};

// DELETE TASK
export const deleteTask = (id) => {
    try {
        return axios.delete(`/api/task/${id}`);
    } catch (error) {
        console.log(error);
    }
};
