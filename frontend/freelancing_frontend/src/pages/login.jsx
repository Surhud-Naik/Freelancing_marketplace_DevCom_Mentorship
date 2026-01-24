import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );
      console.log("Login success!", response.data);
      setSuccessMessage("Login Successful!");
    } catch (err) {
      console.log("Login error!", err.response?.data);

      if (err.response && err.response.data) {
        const firstKey = Object.keys(err.response.data)[0];
        setError(err.response.data[firstKey][0]);
      } else {
        setError("Invalid credentials.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login_cred">
      <button className="login">Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <label className="email"><b>Email:</b></label>
        <br />
        <input className="email1"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <label className="pass"><b>Password:</b></label>
        <br />
        <input className="pass1"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit" disabled={isLoading} className="log_but">
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
