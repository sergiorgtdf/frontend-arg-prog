// Se conecta con la API para realizar las peticiones de autenticación

import axios from "./setCredentials";
// const API_URL = process.env.REACT_APP_API_URL;

export const registerRequest = (payload) => {
    try {
        return axios.post(`/signup`, payload);
    } catch (error) {
        console.log(error);
    }
};

export const loginRequest = (payload) => {
    try {
        return axios.post(`/signin`, payload);
    } catch (error) {
        console.log(error);
    }
};

// Se verifica el token del usuario en el backend

export const verifyToken = (payload) => {
    try {
        // console.log("verifyToken");
        return axios.get(`/verifyToken`, payload);
    } catch (error) {
        console.log(error);
    }
};
