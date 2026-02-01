import React from 'react'
import progress_bar from '../icons/progress_bars3.png'
import dollar_sign from '../icons/dollar_sign.png'


export default function Form_phase3({active,setActive,changeHandler,formsData,setFormsData,phase,setPhase,submitClickHandler}) {



function prevClickHandler() {
  setPhase(prev => prev - 1);
}
  return (
    <div>
        <div className = "form-heading">
            <b><u>Create a Profile for Free</u></b>
        </div>

        <div className="form-subHeading">Tell Us About Your Work</div>  

        <div className="proff-background">
            <div>
                <div className='service-text'>Showcase Your Work!!</div>

                <div className = "skills-yt-link">
                <input value = {formsData.Youtube_link} name = "Youtube_link" onChange = {changeHandler} className = "form-btn" type = 'url' placeholder='Enter youtube link'></input>
                </div>
            </div>

            <div>
                <div className='service-text'>Provide Your Description</div>
                <input value = {formsData.Description} name = "Description" onChange={changeHandler} type = "text" className = "desc-inp-field" placeholder= 'Enter your description' ></input>
                
            </div>
        </div>


        
        
        <div className='rate-card'>
            <b>Rate Card</b>
        </div>
        
        <div className='rate-info-card'>
            <div className='rate-card-field'>
                <input type = "number" value = {formsData.Price} name = "Price" onChange = {changeHandler} className = "charge"></input>
                <img className = "dollar_sign_pos"src = {dollar_sign}></img>
            </div>
            <label className = "charge-text" htmlFor = "charge">Charge </label>
        </div>
        

        <div>
            <img className="progress-bar-img"src = {progress_bar}></img>
        </div>
        
        <div>
            <button  onClick = {prevClickHandler} className = "next-btn">Prev</button>
            <button  onClick = {submitClickHandler} className = "next-btn">Submit</button>
        </div>  
    </div>
  )
}