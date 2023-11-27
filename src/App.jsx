import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePg from "./pages/HomePg";
import LoginPg from "./pages/LoginPg";
import RegisterPg from "./pages/RegisterPg";

import TaskPg from "./pages/TaskPg";
import ProfilePg from "./pages/ProfilePg";
import BlogPg from "./pages/BlogPg";
import { AuthProvider } from "./context/authContext";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import TaskFormPg from "./pages/TaskFormPg";
// import NavBar from "./components/NavBar";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* <NavBar> */}
                    {/* Rutas publicas */}

                    <Route path="/" element={<HomePg />} />
                    <Route path="/login" element={<LoginPg />} />
                    <Route path="/register" element={<RegisterPg />} />
                    <Route path="/newTask" element={<TaskFormPg />} />

                    {/* Rutas privadas */}
                    <Route element={<PrivateRoutes />}>
                        <Route path="/task" element={<TaskPg />} />
                        <Route path="/profile" element={<ProfilePg />} />
                        <Route path="/blog" element={<BlogPg />} />
                        <Route
                            path="/logout"
                            element={<h1>Not Found 404</h1>}
                        />
                    </Route>
                    {/* </NavBar> */}
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
