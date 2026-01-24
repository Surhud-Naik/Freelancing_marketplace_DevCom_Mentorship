import React from 'react'
import {Outlet,Link} from "react-router-dom";

export default function Layout(){
    return (
        <>
        <nav> <div className='homepage'>
            <ul>
                <li class="home">
                   <Link to="/"> <b>Home</b> </Link>   </li>
                    <li class="login">                
                        <Link to ="/login"><b>Login</b>  </Link>
                    </li>
                    <li class="register">
                        <Link to="/register"><b>Register</b></Link>
                    </li>
                    </ul>
                    </div>
                    </nav>
                    <Outlet/>
                    </>
                    
    );
}