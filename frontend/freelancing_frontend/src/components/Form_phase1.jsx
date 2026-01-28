import React from 'react'
import camera_icon from '../icons/camera_icon.png'
import progress_bar from '../icons/progress_bars1.png';

export default function Form_phase1({changeHandler,formsData,setFormsData,phase,setPhase}) {
    function clickNextHandler(){
        console.log(formsData);
        setPhase(prev => prev + 1);
       
    }
  return (
    <div>
        <div className = "form-heading">
            <b><u>Create a Profile for Free</u></b>
        </div>
            <div className="form-subHeading">Tell Us More About Yourself</div>

            <div className = "personal-info-form">
                <div className="personal-info">
                    <input name = "Name" onChange = {changeHandler} className = "form-btn" placeholder='Enter Name'></input> <br></br>
                    <input name = "Email_id" onChange = {changeHandler} className = "form-btn" placeholder='Email id'></input>

                    <div className = "contact_number_form">
                        
                        <div className = "contact-nb-label"><label htmlFor = "contact-nb"  >+91</label></div>
                        <input id = "contact-nb" name = "Contact_Number" onChange = {changeHandler} className = "form-btn contactNumber" placeholder="Contact Number"></input>
                    </div>
                </div>
                <div className="image-add">
                    <div ><img className = "camera-icon" src = {camera_icon}></img></div>
                    
                    <div className = "profile-prompt">Add a Profile picture</div>
                </div>
            </div>
            <div className = "progress-bar-next-btn">
                <img className = "progress-bar-img" src = {progress_bar}></img>
                <button onClick = {clickNextHandler} className = "next-btn">Next</button>
            </div>
    </div>
  )
}