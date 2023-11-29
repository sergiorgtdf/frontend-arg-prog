import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePg from "./pages/HomePg";
import LoginPg from "./pages/LoginPg";
import RegisterPg from "./pages/RegisterPg";

import TaskPg from "./pages/Tasks/TaskPg";
import TaskFormPg from "./pages/Tasks/TaskFormPg";

import BlogPg from "./pages/Blog/BlogPg";
import NewBlogPg from "./pages/Blog/NewBlogPg";

import ProfilePg from "./pages/ProfilePg";
import SettingsPg from "./pages/SettingsPg";

import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import NavBar from "./components/NavBar";

function App() {
    return (
        <AuthProvider>
            <TaskProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        {/* Rutas publicas */}

                        <Route path="/" element={<HomePg />} />
                        <Route path="/login" element={<LoginPg />} />
                        <Route path="/register" element={<RegisterPg />} />

                        {/* Rutas privadas */}
                        <Route element={<ProtectedRoute />}>
                            {/* Rutas de tareas */}
                            <Route path="/task" element={<TaskPg />} />
                            <Route path="/newTask" element={<TaskFormPg />} />
                            <Route path="/task/:id" element={<TaskFormPg />} />

                            {/* Rutas de usuario */}
                            <Route path="/profile" element={<ProfilePg />} />

                            <Route path="/settings" element={<SettingsPg />} />

                            {/* Rutas de blog */}
                            <Route path="/blog" element={<BlogPg />} />
                            <Route path="/newblog" element={<NewBlogPg />} />

                            <Route
                                path="/logout"
                                element={<h1>Not Found 404</h1>}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </TaskProvider>
        </AuthProvider>
    );
}

export default App;
