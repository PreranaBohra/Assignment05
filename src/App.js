import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LogIn from "./components/Login"
import RegisterForm from "./components/registerForm"
import Navbar from "./components/navBar"
import ArtPiece from "./components/ArtPiece"
import ArtInfo from "./components/ArtInfo"
import cart from "./components/Cart"

function App(){
    return(
        <BrowserRouter>
            <div>
                <Navbar/>
                <Switch>
                <Route path ="/" exact component = {ArtPiece}/>
                <Route path ="/loginForm" component = {LogIn}/>
                <Route path ="/registerForm" component = {RegisterForm}/>
                <Route path ="/artInfo/:id" component = {ArtInfo}/>
                <Route path ="/cart" component ={cart}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}




export default App