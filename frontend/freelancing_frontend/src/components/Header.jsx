import React from 'react'
import { useState } from 'react';
export default function Header({active,setActive,hireOrFreeLance,setHireOrFreeLance,phase,setPhase}) {

  
  function hireBtnHandler(){
    setHireOrFreeLance(true);
    setPhase(1);
    setActive(0);
  }
  function freeLanceBtnHandler(){
    setHireOrFreeLance(false)
    setActive(1);
  }
  return (
    <div>
        <div>
        <div className = "Header">
          <div className = "left-section">
            <div className = "catchy-phrase">Catchy Phrase</div>
            <div className = "tag-line">Tag Line</div>
          </div>

          <div className = "right-section">
            <div className = "hire-freelance-btn-container">
              <button onClick = {hireBtnHandler} className = {active ? "hire-btn hire-freelance-btn" : "updated-btn-props  hire-freelance-btn hire-btn"}>Hire</button>
              <button onClick = {freeLanceBtnHandler} className = {active ? "updated-btn-props  hire-freelance-btn freelance-btn" : "hire-freelance-btn freelance-btn"}>Freelance</button>
            </div>

            <div className = "greeting">Hii Username!</div>
          </div>
        </div>
    </div>
    </div>
  )
}
