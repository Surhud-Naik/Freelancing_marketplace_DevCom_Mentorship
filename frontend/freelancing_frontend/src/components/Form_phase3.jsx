import React from 'react'
import progress_bar from '../icons/progress_bars3.png'
import dollar_sign from '../icons/dollar_sign.png'


export default function Form_phase3({active,setActive,changeHandler,formsData,setFormsData,phase,setPhase}) {

    function nextClickHandler() {
  setPhase(prev => prev + 1);
  setActive(0);
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

        <div className='service-text'>Showcase Your Work!!</div>

        <div className = "skills-yt-link">
           <input name = "personal_works" onChange = {changeHandler} className = "form-btn" type = 'url' placeholder='Enter youtube link'></input>
        </div>

        <div className='rate-card'>
            <b>Rate Card</b>
        </div>
        
        <div className='rate-info-card'>
            <div className='rate-card-field'>
                <input name = "charges"onChange = {changeHandler} className = "charge"></input>
                <img className = "dollar_sign_pos"src = {dollar_sign}></img>
            </div>
            <label className = "charge-text" htmlFor = "charge">Charge </label>
        </div>
        

        <div>
            <img className="progress-bar-img"src = {progress_bar}></img>
        </div>
        
        <div>
            <button  onClick = {prevClickHandler} className = "next-btn">Prev</button>
            <button  onClick = {nextClickHandler} className = "next-btn">Submit</button>
           
        </div>  
    </div>
  )
}