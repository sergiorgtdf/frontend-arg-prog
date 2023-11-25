import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

import { registerRequest } from "../api/auth.js";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Error en el contexto del usuario");
    }
    return context;
};

export const authProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Registro de Usuario
    const signup = async (user) => {
        try {
            const respuesta = await registerRequest(user);
            console.log(Response.data);
            setUser(respuesta.data);
        } catch (error) {
            console.log(error.Response.data);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                signup,
                user,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
