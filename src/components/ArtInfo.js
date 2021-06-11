
import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"



function ArtInfo() {
  const[post, setPost] = useState(null)
  const {id} = useParams();
  useEffect (()=>{
     const url =`https://artwork-gallery-app.herokuapp.com/artworks/get/${id}`;
     fetch(url).then(resp =>resp.json())
     .then(json => {
       setPost(json.data)
      });
},[id]);

        return (
          <div>
          {
            post && 
            (
             <p key={post._id}>
             <div className ="info_container">
             <div className = "gridItem"><img src = {post.imageUrl} alt = " " /></div>
             <p className ="info_caption">{post.title}</p>
             <p className = "genre"><label>Genre : </label>{post.genre}</p>
             <p className = "price"><label>Price : $</label>{post.price}</p>
             <button id = "cartBtn" onClick={this.addToCart}>Add To Cart</button>
             </div>
             </p>
           )}
          </div>
        );
            }
      
 

export default ArtInfo