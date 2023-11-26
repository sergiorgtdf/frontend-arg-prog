import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest } from "../api/auth.js";
import { useEffect } from "react";

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
        } catch (error) {
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
            // console.log(error.response.data);
            setErroBack(error.response.data);
        }
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

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                isAuth,
                user,
                errorBack,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
