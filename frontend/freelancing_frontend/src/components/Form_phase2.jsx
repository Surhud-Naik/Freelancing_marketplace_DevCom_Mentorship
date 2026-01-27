import React from 'react'
import progress_bar from '../icons/progress_bars2.png'


export default function Form_phase2({changeHandler,formsData,setFormsData,phase,setPhase}) {
    function nextClickHandler(){
        phase = phase+1;
        setPhase(phase)

    }
    function prevClickHandler(){
        phase = phase-1;
        setPhase(phase);
    }

  return (
    <div>

        <div className = "form-heading">
            <b><u>Create a Profile for Free</u></b>
        </div>

        <div className="form-subHeading">Tell Us About Your Work</div>  

        <div className='service-text '>Choose your service: </div>

        <div className="form-button">
            <input name = "expertise" onChange = {changeHandler} className = "form-btn" type = "text" placeholder='Enter your service'></input>
        </div>

        <div className='service-text'>
            Outline your professional background: 
        </div>

        <div className = "text-field" >
            <input name = "proff_background" onChange = {changeHandler} className = "form-btn qualific-ip-field" placeholder = "Enter your text here"type='text'></input>
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
