import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePg from "./pages/HomePg";
import LoginPg from "./pages/Login/LoginPg";
import RegisterPg from "./pages/Login/RegisterPg";
import TaskPg from "./pages/TaskPg";
import ProfilePg from "./pages/ProfilePg";
import { AuthProvider } from "./context/authContext";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePg />} />
                    <Route path="/login" element={<LoginPg />} />
                    <Route path="/register" element={<RegisterPg />} />
                    <Route path="/task" element={<TaskPg />} />
                    <Route path="/profile" element={<ProfilePg />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
