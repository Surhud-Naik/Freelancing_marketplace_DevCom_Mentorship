import React from 'react'
import "./Header.css"

export default function Header() {
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
              <button className = "hire-freelance-btn">Hire</button>
              <button className = "hire-freelance-btn">Freelance</button>
            </div>

            <div className = "greeting">Hii Username!</div>
          </div>
        </div>
    </div>

    </div>
  )
}
