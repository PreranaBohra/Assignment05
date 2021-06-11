import React,{useState} from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"



function Navbar(){
    const [isOpen, setOpen] = useState(false);
    return(
        <div className = "Navbar">
        <div className = "heading">Graphic Artwork</div>
            <div className = {isOpen ? "nav-link-hidden a" : "nav-link a"}>
               <Link to = "/">Home</Link>
               <Link to = "/loginForm">Login</Link>
               <Link to = "/registerForm">Sign Up</Link>
               <Link to = "/Cart">Cart</Link>
            </div>
            <div className="bars" onClick ={() => setOpen(!isOpen)}><FontAwesomeIcon icon={faBars} /></div>
        </div> 
       )
}

export default Navbar