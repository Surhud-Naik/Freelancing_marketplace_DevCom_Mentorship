import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />


        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

