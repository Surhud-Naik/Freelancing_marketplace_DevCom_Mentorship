import React from 'react'
import verify_icon from '../icons/verify_icon.svg'


export default function HeroSection() {
  return (
    <div className= "bg">
      <div className='heading-text'>Welcome to Website Name</div>
      <div className = "subHeading">Join a global community of freelancers</div>
      <div className="promises-section">
      
              <img src = {verify_icon}></img>
              <div className = "promise-text">100% Trusted Clients</div>
      
              <img src = {verify_icon}></img>
              <div className = "promise-text" >Secured Payments</div>
      
              <img src = {verify_icon}></img>
              <div className = "promise-text">Professional Excellence</div>
        </div>

       
      
    </div>
  )
}
