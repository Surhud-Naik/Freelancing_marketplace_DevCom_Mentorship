import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Maincontent from "../components/Maincontent";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://127.0.0.1:8000/auth/user/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsername(response.data.username);
      } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/", { replace: true });
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      await axios.post(
        "http://127.0.0.1:8000/auth/logout/",
        { refresh: refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="container">
      <Sidebar onLogout={handleLogout} />
      <Maincontent username={username} />
    </div>
  );
}
