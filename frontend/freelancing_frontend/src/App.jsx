import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

