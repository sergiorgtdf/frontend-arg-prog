import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePg from "./pages/HomePg";
import LoginPg from "./pages/Login/LoginPg";
import RegisterPg from "./pages/Login/RegisterPg";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePg />} />
                <Route path="/login" element={<LoginPg />} />
                <Route path="/register" element={<RegisterPg />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
