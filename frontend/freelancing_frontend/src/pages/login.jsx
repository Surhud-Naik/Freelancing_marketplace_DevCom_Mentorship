import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import LoginItem from "../components/LoginItem";

export default function Login() {

  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/home" replace />;
  }

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login/",
        formData
      );

      localStorage.setItem("accessToken", response.data.tokens.access);
      localStorage.setItem("refreshToken", response.data.tokens.refresh);

      navigate("/home", { replace: true });

    } catch (error) {
      console.log("Error during Login!", error.response?.data);

      if (error.response && error.response.data) {
        Object.keys(error.response.data).forEach(field => {
          const errorMessages = error.response.data[field];
          if (errorMessages && errorMessages.length > 0) {
            setError(errorMessages[0]);
          }
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <LoginItem
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
