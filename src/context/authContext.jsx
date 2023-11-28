import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest, verifyToken } from "../api/auth.js";
import { useEffect } from "react";
import cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Error en el contexto del usuario");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [isAuth, setIsAuth] = useState(false);

    // Manejo el estado del  error
    const [errorBack, setErroBack] = useState([]);

    // Registro de Usuario
    const signup = async (user) => {
        try {
            const respuesta = await registerRequest(user);
            // console.log(respuesta.data);
            setUser(respuesta.data);
            setIsAuth(true);
            setEvitaRedireccion(true);
        } catch (error) {
            setIsAuth(false);
            // console.log(error.response.data);
            setErroBack(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const respuesta = await loginRequest(user);
            // console.log(Response.data);
            setUser(respuesta.data);
            setIsAuth(true);
        } catch (error) {
            setIsAuth(false);
            // console.log(error.response.data);
            setErroBack(error.response.data);
        }
    };

    const signout = () => {
        cookies.remove("token");
        console.log("adios");
        setIsAuth(false);
        setUser(null);
    };

    //borrar mensaje de error
    useEffect(() => {
        if (errorBack.length > 0) {
            const timer = setTimeout(() => {
                setErroBack([]);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errorBack]);

    // Verifica si el usuario esta logueado, cuando se recarga la pagina

    // guarda cookiek
    useEffect(() => {
        async function verifyLogin() {
            const cookie = cookies.get();
            // console.log(cookie.token);
            if (!cookie.token) {
                cookies.remove("token");
                setIsAuth(false);
                setUser(null);
            }
            try {
                const respuesta = await verifyToken(cookie.token);
                // console.log(respuesta);
                if (!respuesta.data) {
                    setIsAuth(false);
                    setUser(null);
                    cookies.remove("token");

                    setLoading(false);
                }
                setUser(respuesta.data);
                setIsAuth(true);
                setLoading(false);
            } catch (error) {
                setIsAuth(false);
                setUser(null);
                cookies.remove("token");
                setLoading(false);
                // console.log(error.response);
            }
        }
        verifyLogin();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                signout,
                loading,
                isAuth,
                user,
                errorBack,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
