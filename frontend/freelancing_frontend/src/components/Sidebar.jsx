import chat_box from '../icons/chat_box.svg'
import like_icon from '../icons/like_icon.svg'
import logo from '../icons/Logo.svg'
import notification_icon from '../icons/notification_icon.svg'
import search_icon from '../icons/search_icon.svg'
import user_profile from '../icons/user_profile.svg'
import menu_icon from '../icons/menu_icon.svg'

export default function Sidebar({handleLogout}) {
  return (
    <div className='sideBar'>
      <img className = "Icons"  src = {logo} alt="logo"></img>
      <img className = "Icons"  src = {menu_icon} alt="menu_icon"></img>
      <img className = "Icons" src = {user_profile} alt="user_profile"></img>
      <img className = "Icons" src = {search_icon} alt="search_icon"></img>
      <img className = "Icons" src = {notification_icon} alt="notification_icon"></img>
      <img className = "Icons" src = {like_icon} alt="like_icon"></img>
      <img className = "Icons" src = {chat_box} alt="chat-box"></img>

      <button className="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
