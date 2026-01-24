import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios"


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
    <div>
      {isLoggedIn ? ( <>
      <h2>
        Hi, {username}. Thnaks for logging in!
      </h2>
      <button onClick={handleLogout}>Logout</button>
     </> ):( <h2 className='request'>
        Please Login
      </h2> )}
    </div>
  )
}