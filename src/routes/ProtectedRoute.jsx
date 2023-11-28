import { useAuth } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    // TODO MOSTRAR EFECTO CARGANDO

    const { loading, user, isAuth } = useAuth();
    console.log(user, isAuth);

    if (loading) return <h1>`Cargando...`</h1>;

    // si no esta autenticado lo redirecciono al login
    if (!loading && !isAuth) return <Navigate to="/login" replace />;

    // si esta autenticado lo redirecciono al componente hijo
    return <Outlet />;
};
