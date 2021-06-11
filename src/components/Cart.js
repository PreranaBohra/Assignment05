import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

    class CartPage extends React.Component {
        constructor() {
          super();
      
          const state = {
              cart:[],
              cartTotal: 0
          };
        }
      
        componentDidMount() {
          const local = localStorage.getItem("cart");
          console.log("local", local);
          if (local) {
            const data = JSON.parse(local);
            this.setState({
              cart: data
            });
          }
        }
       
       
        increment = (id) => {
          let quantity = 1;
      
          const local = localStorage.getItem("cart");
          let cartArr = [];
          if (local) {
            cartArr = JSON.parse(local);
           
          cartArr = cartArr.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity + 1 ,
                price : item.price,
                total: item.price * item.quantity 
              };
            } else return item;
          });
         
        }
         

          localStorage.setItem("cart", JSON.stringify(cartArr));
          this.setState ({cart :cartArr})
        };
       
        decrement = (id) => {
          
          let quantity =1
      
          const local = localStorage.getItem("cart");
          let cartArr = [];
          
          if (local) {
            cartArr = JSON.parse(local);
      
          cartArr = cartArr.map((item) => {
            if (item.id === id) {
        
              return {
                ...item,
                quantity: item.quantity - 1,
                price : item.price,
                total: item.price * item.quantity
               
              };
            } else return item;
          });
        }
          
          localStorage.setItem("cart", JSON.stringify(cartArr));
          this.setState ({cart :cartArr})
        };
       
        removeData = (id) =>{
          
          const local = localStorage.getItem("cart");
          let cartArr = [];
          
          if (local) {
            cartArr = JSON.parse(local);
      
          cartArr = cartArr.filter((item) => 
             (item.id !== id) );
          }
          localStorage.setItem("cart", JSON.stringify(cartArr));
          this.setState ({cart :cartArr})
        }
        
        addTotals = () => {
          let subTotal = 0;
          this.state.cart.map(item => (subTotal += item.total));
          const total = subTotal ;
          this.setState(() => {
            return {
              cartTotal:total
            }
          })
        };
      
      
        render() {
          
          return (
            <div>
              <h1>Cart Page</h1>
              {this.state ? (
                <table>
                  <thead>
                   <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                  </thead>
                  <tbody>
                    {this.state.cart.map((item) => (
                      <tr key={item.id}>
                        <td><img src ={item.image} alt={item.title}/></td>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td><button className = "Add" onClick={this.increment.bind(this, item.id)}>+</button> <button className = "substract" onClick={this.decrement.bind(this, item.id )}>-</button></td>
                        <td><button onClick={this.removeData.bind(this, item.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                        <td>{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Cart is empty</p>
              )}
              <hr/>
              <div></div>
            </div>
          );
        }
      }
      
      export default CartPage;
      