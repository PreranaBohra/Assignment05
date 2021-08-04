
import React, {useEffect, useState,useContext} from "react"
import {useParams} from "react-router-dom"
import "../css/artWork.css"
import ArtContext from '../contexts/ArtContext';


function ArtInfo() {
    const[post, setPost] = useState(null)
    const[cart, setCart] = useState([])
    const { addItem } = useContext(ArtContext);

 console.log(cart)
 
  const {id} = useParams();
  useEffect (()=>{
     const url =`https://artwork-gallery-app1.herokuapp.com/artworks/get/${id}` ;
     fetch(url).then(resp =>resp.json())
     .then(json => {
       setPost(json)
      });
  },[id])
  
         return(
          <div>
          {
            post && 
            (
             <p key={post._id}>
             <div className ="info_container">
             <div className = "gridItem"><img src = {post.imageUrl} alt = {post.title} /></div>
             <p className ="info_caption">{post.title}</p>
             <p className = "genre"><label>Genre : </label>{post.genre}</p>
             <p className = "price"><label>Price : $</label>{post.price}</p>
            <button className="CartBtn" onClick={() => addItem(post)}>
              Add to cart
            </button>
             </div>
             </p>
           )}
          </div>
        );
      
}
      
 

export default ArtInfo