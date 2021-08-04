import React, { useEffect,useState,useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "../css/Cart.css"
import CartContext from '../contexts/CartContext';

import { Link } from "react-router-dom";
    
       const Cart = () =>{
       
       
       const [total, setTotal] = useState();
       const { cart, removeItem } = useContext(CartContext);
      console.log(cart)
      // console.log(cart)
// useEffect(() => {
// setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
// }, [cart]);

// const totalPrice = this.state.cart.reduce((acc, curr) => acc + curr.price, 0);
// const increment = (id) =>{
// if(props.id == !id)
// setCart({
// quantity: props.item.quantity + 1
// })
// }

// const decrement = (id) =>{
// if(id == !id)
// setCart({
// quantity: props.item.quantity - 1
// })
// }
// const removeItem = (id) =>{
// if(id == !id)
// setCart({ 
// })
// }
// const getTotalSum = () => {
// return cart.reduce(
// (sum, { price, quantity }) => sum + price * quantity,
// 0
// );
// }; 

      return (
      <div className="cart">
      <div className="cart-left">
           <div className="cart-title">Cart Page</div>
          
            <table className="table1" >
              <thead>
               <th>Image</th>
                <th className="img_title">Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </thead>
              <tbody>
              {cart.map((item) => (
                  <tr key={item.id}>
                    <td><img src ={item.imageUrl} alt={item.title} className ="cart-img"/></td>
                    <td className="img_title">{item.title}</td>
                    <td className="price">${item.price}</td>
                    <td className="count">
                    <button className = "Add"  >+</button>
                    <div className="quantity">{item.quantity}</div>
                    <button className = "substract" disabled = {(item.quantity === 1) ? true : false} >-</button>
                    <button onClick={()=>removeItem(item._id)}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                    <td>${ item.total || item.price}</td>
                  </tr>
                  ))} 
              </tbody>
              </table>
              
          </div>
          <div className="cart-right">
         
           <table className="table2">
           <thead>
           <th>Cart Items</th>
           <th>Price</th>
           </thead>
           <tbody>
           {cart.map((item) => (
           <tr>
           <td>{item.title}</td>
           <td>${ item.total || item.price}</td>
           </tr>
           ))}
           </tbody>
           <hr/>
           <div className="total-price">Total Price: ${total} </div>
           <Link to = "checkout">
           <button className= "checkOut-btn">Check Out</button>
           </Link>
           </table> 
            
          
           </div>
           
           </div>
      );
            }
        
      
      export default Cart;
      
      
// import React, { useContext } from 'react';

// // Components
// import Item from './cartItems';

// // Contexts
// import CartContext from '../contexts/CartContext';

// const ShoppingCart = () => {
//   const { cart, removeItem } = useContext(CartContext);
//   console.log(cart)

//   const getCartTotal = () => {
//     return cart
//       .reduce((acc, value) => {
//         return acc + value.price;
//       }, 0)
//       .toFixed(2);
//   };

//   return (
//     <div className="shopping-cart">
//       {cart.map(item => (
//         <Item key={item.id} {...item} removeItem={removeItem} />
//       ))}

//       <div className="shopping-cart__checkout">
//         <p>Total: ${getCartTotal()}</p>
//         <button>Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;
      