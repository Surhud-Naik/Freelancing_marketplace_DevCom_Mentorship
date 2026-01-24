import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
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
      await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formData
      );
      setSuccessMessage("Registration Successful!");
    } catch (err) {
      if (err.response && err.response.data) {
        const firstKey = Object.keys(err.response.data)[0];
        setError(err.response.data[firstKey][0]);
      } else {
        setError("Backend not connected.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-bar">Register</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
       
       
       
        <label  className="text">Username:</label><br />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="ent"
        /><br /><br />

        <label  className="text">Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="ent"
        /><br /><br />

        <label  className="text">Password:</label><br />
        <input
          type="password"
          name="password1"
          value={formData.password1}
          onChange={handleChange}
          className="ent"
        /><br /><br />

        <label  className="text">Confirm Password:</label><br />
        <input
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          className="ent"
        /><br /><br />

        <button type="submit" disabled={isLoading} className="register-btn">
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
