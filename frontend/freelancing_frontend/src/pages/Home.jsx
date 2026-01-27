import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios"
import Sidebar from '../components/Sidebar.jsx';
import Maincontent from '../components/Maincontent.jsx';
import "./home.css"

export default function Home() {
  const [username, setUsername]=useState("")
  const [isLoggedIn , setLoggedIn] =useState(false)
useEffect (()=>{
  const checkLoggedInUser = async () =>{
    try{
      const token = localStorage.getItem("accessToken");
      if(token){
        const config ={
          headers: {
            "Authorization": `Bearer ${token}`
          }
        };
const response = await axios.get(
  "http://127.0.0.1:8000/api/profile/",
  config
);

       setLoggedIn(true)
      setUsername(response.data.username)
         }
         else{setLoggedIn(false);
          setUsername("");
         }
    }
    catch(error){
      setLoggedIn(false);
      setUsername("");

    }
  };
  checkLoggedInUser()
},[])
const handleLogout = async () => {
  try {
const refreshToken = localStorage.getItem("refreshaccessToken");
if(refreshToken){
  await axios.post("http://127.0.0.1:8000/api/logout/",{"refresh": refreshToken})
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  setLoggedIn(false);
  setUsername("")
}
  }
  catch(error){
    console.log("Failed to logout!")

  }
}
  return (
    <div className = "container">
      <div><Sidebar/></div>
      <div><Maincontent/></div>
    </div>
  )
}