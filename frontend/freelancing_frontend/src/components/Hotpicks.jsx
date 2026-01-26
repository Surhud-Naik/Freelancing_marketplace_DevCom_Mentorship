import React from 'react'
import display1 from '../icons/homepage-display-photo1.png'
import display2 from '../icons/homepage-display-photo2.png'
import display3 from '../icons/homepage-display-photo3.png'
import "./Hotpicks.jsx"


export default function Hotpicks() {
  return (
    <div>
      <div className = "hotpicks-title">
        Trending picks
      </div>
        <div>
            <img src = {display1} alt="Hotpick1"></img>
            <img src = {display2} alt="Hotpick2"></img>
            <img src = {display3} alt="Hotpick3"></img>

        </div>
    </div>
  )
}
