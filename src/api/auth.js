// Se conecta con la API para realizar las peticiones de autenticación

import axios from "./setCredentials";
// const API_URL = process.env.REACT_APP_API_URL;

export const registerRequest = (payload) => {
    return axios.post(`/api/signup`, payload);
};

export const loginRequest = (payload) => {
    try {
        return axios.post(`/api/signin`, payload);
    } catch (error) {
        console.log(error);
    }
};

// Se verifica el token del usuario en el backend

export const verifyToken = (payload) => {
    try {
        // console.log("verifyToken");
        return axios.get(`/api/verifyToken`, payload);
    } catch (error) {
        console.log(error);
    }
};
