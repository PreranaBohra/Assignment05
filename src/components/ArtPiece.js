import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"

function ArtPiece(){
    const[posts, setPosts] = useState([])
useEffect (()=>{
   const url ="https://artwork-gallery-app.herokuapp.com/artworks/get";
   fetch(url).then(resp =>resp.json())
   .then(resp => setPosts(resp))
},[])

    return(
        <div className = "page_container">
        {
            posts.map(post => 
             <div className ="container" key={post._id}>
            <div className = "img_link">
            <Link to = {`/artInfo/${post._id}` }>
            <img src={post.imageUrl} alt=""/>
             </Link>  
            </div>
            <p id ="caption">{post.title}</p>
            </div>
            )
        }
        </div>
    )
       
       
}

export default ArtPiece