import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import ServiceDetail from "./pages/ServiceDetail";




export default function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />


        
          <Route path="/home" element={<Home />} />
        

        <Route path="/register" element={<Register />} />
            
        <Route path="/service/:id" element={<ServiceDetail />} />
        
      </Routes>
    </BrowserRouter>
  );}


    
   

