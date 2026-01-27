import React, { useState } from "react";
import axios from "axios";
import RegisterItem from "../components/RegisterItem";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
	const [formData, setFormData] = useState({
    username: "",
		password1: "",
    password2:"",
		email: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
  const [successMessage, setSuccessMessage] = useState(null)
	const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
	
    const handleSubmit = async (e) => {
		e.preventDefault();
        if(isLoading){
            return
        }
        if (formData.password1 !== formData.password2) {
          setError("Passwords do not match!");
          return;
        }

        setIsLoading(true);
        setError(null);
        try{
            const response = await axios.post("http://127.0.0.1:8000/auth/register/", formData)
            console.log("Success!", response.data)
            setSuccessMessage("Registration successful!");
            setTimeout(() => navigate("/"), 1000);
        }
        catch(error){
            console.log("Error during registration!", error.response?.data);
            if(error.response && error.response.data){
                Object.keys(error.response.data).forEach(field => {
                    const errorMessages = error.response.data[field];
                    if(errorMessages && errorMessages.length > 0){
                        setError(errorMessages[0]);
                    }
                })
            }
        }
        finally{
            setIsLoading(false)
        }

	};
	return (
		<div>
      <RegisterItem
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        successMessage={successMessage}
      />
		</div>
	);
}