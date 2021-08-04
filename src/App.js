import React,{ useState, useEffect }  from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LogIn from "./components/Login"
import RegisterForm from "./components/registerForm"
import Navbar from "./components/navBar"
import ArtPiece from "./components/ArtPiece"
import ArtInfo from "./components/ArtInfo"
import Cart from "./components/Cart"
import ArtContext from './contexts/ArtContext';
import CartContext from './contexts/CartContext';


function App(){
  const initialCart = () =>
    JSON.parse(window.localStorage.getItem('cart')) || [];

    const [cart,setCart] = useState(initialCart);
    const [post,setPosts] = useState([]);

    useEffect(() => {
      window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
   useEffect (()=>{
    const url ="https://artwork-gallery-app1.herokuapp.com/artworks/get";
    fetch(url).then(resp =>resp.json())
    .then(resp => setPosts(resp))
   },[])

 const addItem = (item) => {
   if (!cart.find(cartItem => cartItem.id === item._id)) {
      setCart([...cart, item]);
    }
  };

  const increment = (_id) => {
    setCart(cart.filter(item => item.quantity))
  }
  const removeItem = (_id) => {
    setCart(cart.filter(item => item._id !== _id));
  };
    return(
        <ArtContext.Provider value={{ post, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
        <BrowserRouter>
            <div>
                <Navbar/>
                <Switch>
                <Route path ="/" exact component = {ArtPiece}/>
                <Route path ="/loginForm" component = {LogIn}/>
                <Route path ="/registerForm" component = {RegisterForm}/>
                <Route path ="/artInfo/:id" component = {ArtInfo}/>
                <Route path ="/cart" component ={Cart}/>
                </Switch>
            </div>
        </BrowserRouter>
        </CartContext.Provider>
        </ArtContext.Provider>
    )
}




export default App