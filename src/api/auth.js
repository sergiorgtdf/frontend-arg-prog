// Se conecta con la API para realizar las peticiones de autenticación

import axios from "axios";
// const API_URL = process.env.REACT_APP_API_URL;

const API_URL = "http://localhost:4000";

export const registerRequest = (payload) => {
    return axios.post(`${API_URL}/api/signup`, payload);
};

export const loginRequest = (payload) => {
    try {
        return axios.post(`${API_URL}/api/signin`, payload);
    } catch (error) {
        console.log(error);
    }
};
