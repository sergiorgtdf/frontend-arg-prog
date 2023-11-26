import { useAuth } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoutes = () => {
    const { isAuth } = useAuth();
    if (!isAuth) {
        // si no esta autenticado lo redirecciono al login
        return <Navigate to="/login " />;
    }
    // si esta autenticado lo redirecciono al componente hijo
    return <Outlet />;
};
