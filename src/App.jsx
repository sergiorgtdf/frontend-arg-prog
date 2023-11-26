import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePg from "./pages/HomePg";
import LoginPg from "./pages/Login/LoginPg";
import RegisterPg from "./pages/Login/RegisterPg";
import TaskPg from "./pages/TaskPg";
import ProfilePg from "./pages/ProfilePg";
import { AuthProvider } from "./context/authContext";
import { PrivateRoutes } from "./routes/PrivateRoutes";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Rutas publicas */}
                    <Route path="/" element={<HomePg />} />
                    <Route path="/login" element={<LoginPg />} />
                    <Route path="/register" element={<RegisterPg />} />

                    {/* Rutas privadas */}
                    <Route element={<PrivateRoutes />}>
                        <Route path="/task" element={<TaskPg />} />
                        <Route path="/profile" element={<ProfilePg />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
