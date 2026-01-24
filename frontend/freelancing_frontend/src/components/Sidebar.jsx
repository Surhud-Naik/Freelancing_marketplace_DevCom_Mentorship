import React from 'react'
import chat_box from '../icons/chat_box.svg'
import like_icon from '../icons/like_icon.svg'
import logo from '../icons/Logo.svg'
import notification_icon from '../icons/notification_icon.svg'
import search_icon from '../icons/search_icon.svg'
import user_profile from '../icons/user_profile.svg'
import menu_icon from '../icons/menu_icon.svg'




export default function Sidebar() {
  return (
    <div className='sideBar'>
      <img className = "Icons"  src = {logo}></img>
      <img className = "Icons"  src = {menu_icon}></img>
      <img className = "Icons" src = {user_profile}></img>
      <img className = "Icons" src = {search_icon}></img>
      <img className = "Icons" src = {notification_icon}></img>
      <img className = "Icons" src = {like_icon}></img>
      <img className = "Icons" src = {chat_box}></img>
    </div>

     
  )
}
