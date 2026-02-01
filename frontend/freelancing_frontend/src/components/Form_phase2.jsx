import React from 'react'
import progress_bar from '../icons/progress_bars2.png'


export default function Form_phase2({changeHandler,formsData,setFormsData,phase,setPhase}) {
    function nextClickHandler() {
  setPhase(prev => prev + 1);
}

function prevClickHandler() {
  setPhase(prev => prev - 1);
}
  return (
    <div>

        <div className = "form-heading">
            <b><u>Create a Profile for Free</u></b>
        </div>

        <div className="form-subHeading">Tell Us About Your Work</div>  

        <div className='service-text '>Choose your Service Name: </div>

        <div className="form-button">
            <input value = {formsData.Service_Name} name = "Service_Name" onChange = {changeHandler} className = "form-btn" type = "text" placeholder='Enter your service'></input>
        </div>

        <div className='service-text'>
            Outline your Professional Qualification: 
        </div>

        <div className = "text-field" >
            <input value = {formsData.Qualification} name = "Qualification" onChange = {changeHandler} className = "form-btn qualific-ip-field" placeholder = "Enter your text here"type='text'></input>
        </div>

        <div >
            <img className = "progress-bar-img" src = {progress_bar}></img>
        </div>
        <div>
            <button  onClick = {prevClickHandler} className = "next-btn">Prev</button>
            <button  onClick = {nextClickHandler} className = "next-btn">next</button>
        </div>

    </div>
  )
}