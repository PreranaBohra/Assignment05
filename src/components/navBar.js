import React,{useState} from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "../css/NavBar.css"


function Navbar(){
    const [isOpen, setOpen] = useState(false);
    return(
        <header>
        <div className = "heading">Graphic Artwork</div>
             
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href= "/loginForm">Login</a></li>
            <li><a href = "/registerForm">Sign Up</a></li>
            <li><a href = "/Cart">Cart</a></li>
            <li className = "close">X</li>
         </ul>
            
        </header> 
       )
}

export default Navbar