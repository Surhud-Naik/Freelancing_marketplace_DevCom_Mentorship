import React, { useState } from 'react'
import camera_icon from '../icons/camera_icon.png'
import progress_bar from '../icons/progress_bars1.png';
import { useRef } from 'react';


export default function Form_phase1({changeHandler,formsData,setFormsData,phase,setPhase}) {
    function clickNextHandler(){
        console.log(formsData);
        setPhase(prev => prev + 1);
    }


    const fileInput = useRef(null);

    function imageClickHandler(){
        fileInput.current.click();

    }
    function handleImageChange(e){
        const file = e.target.files[0];
        console.log(file);
        
        setFormsData(function(prev) {

            return {...prev,["Profile_image"]: file};
        });
    }
    


  return (
    <div>
        <div className = "form-heading">
            <b><u>Create a Profile for Free</u></b>
        </div>
            <div className="form-subHeading">Tell Us More About Yourself</div>

            <div className = "personal-info-form">
                <div className="personal-info">
                    <input value = {formsData.Name} name = "Name" onChange = {changeHandler} className = "form-btn" placeholder='Enter Name'></input> <br></br>
                    <input value = {formsData.email } name = "email" onChange = {changeHandler} className = "form-btn" placeholder='Email id'></input>

                    <div className = "contact_number_form">
                        
                        <div className = "contact-nb-label"><label htmlFor = "contact-nb"  >+91</label></div>
                        <input type = "number" value = {formsData.Phone_number} id = "contact-nb" name = "Phone_number" onChange = {changeHandler} className = "form-btn contactNumber" placeholder="Contact Number"></input>
                    </div>
                </div>
                <div className="image-add">
                    <div ><img onClick={imageClickHandler} className = "camera-icon" src = {camera_icon}></img></div>
                    
                    <div className = "profile-prompt">Add a Profile picture</div>

                    <input style={{display:"none"}} ref = {fileInput} type = "file" onChange={handleImageChange}></input>

                    {formsData.Profile_image && (<img src={URL.createObjectURL(formsData.Profile_image)} alt="preview" style={{ position: "absolute" ,  top: "690px",width: "214px", height: "230px", marginTop: "10px" }}/>)}
                </div>
            </div>
            <div className = "progress-bar-next-btn">
                <img className = "progress-bar-img" src = {progress_bar}></img>
                <button onClick = {clickNextHandler} className = "next-btn">Next</button>
            </div>
    </div>
  )
}