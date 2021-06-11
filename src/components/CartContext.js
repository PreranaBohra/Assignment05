import React, { useEffect, useState ,useContext} from 'react';


export const CartContext = React.createContext();

export const ContextProvider = (props) =>{
 
    const [cart,setCart] = useState();


    
    const addToCart = () =>{
       
    }

    const increment = () =>{

    }

    const decrement = () =>{

    }

    const removeItem = () =>{

    }

    const getTotal = () =>{

    }
    return(
        <CartContext.Provider values={
            cart, 
            addToCart , 
            increment, 
            decrement, 
            removeItem,
            getTotal
        }>
        {props.children}
        </CartContext.Provider>
    );
    
}