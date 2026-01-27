import magnifying_glass from '../icons/magnifying_glass.svg'
import verify_icon from '../icons/verify_icon.svg'

export default function Searchtool() {
  return (
    <div  className="bg searchTool">
      
      <div className = "heading-text">Welcome to Website Name!</div>
      <div className = "search-bar">
        <img className = "magnify-glass"src = {magnifying_glass}></img>
        <input type='Search' className = "input-field" placeholder='What are you looking for..   '></input>

      </div>
      

      <div className = "navigation-buttons">
        <button className='nav-btn'>Graphic Designing</button>
        <button className='nav-btn'>Content Creation</button>
        <button className='nav-btn'>Digital Marketing</button>
        <button className='nav-btn'>Video Editing</button>
        <button className='nav-btn'>Web Development</button>
        <button className='nav-btn'>Voice Cloning</button>


      </div>

      <div className="promises-section">

        <img src = {verify_icon}></img>
        <div className = "promise-text">100% Verified Skills</div>

        <img src = {verify_icon}></img>
        <div className = "promise-text" > Secured Payments</div>

        <img src = {verify_icon}></img>
        <div className = "promise-text">Budget Friendly</div>
      </div>

    </div>
  )
}
