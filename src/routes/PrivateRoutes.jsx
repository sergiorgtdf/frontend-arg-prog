import { useAuth } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    // TODO MOSTRAR EFECTO CARGANDO

    const { isAuth } = useAuth();
    if (!isAuth) {
        // si no esta autenticado lo redirecciono al login
        return <Navigate to="/login" replace />;
    }
    // si esta autenticado lo redirecciono al componente hijo
    return <Outlet />;
};
