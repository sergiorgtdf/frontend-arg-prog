import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
});
// TODO: Agregar .env para la URL de la API
export default instance;
