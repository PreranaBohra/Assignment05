// import React, {useEffect, useState} from "react"
// import {Link} from "react-router-dom"
// import "../css/artWork.css"



// function ArtPiece(){
//     return(
//         <div className = "page_container">
//         {
//             post.map(po => 
//              <div className ="container" key={po._id}>
//             <div className = "img_link">
//             <Link to = {`/artInfo/${po._id}` }>
//             <img src={po.imageUrl} alt={po.title}/>
//              </Link>  
//             <p className ="caption">{po.title}</p>
//             </div>
    
//             </div>

//             )
//         }
//         </div>
//     )
       
       
// }

// export default ArtPiece

import React, { useContext } from 'react';

// Components
import Art from './Art';

// Contexts
import ArtContext from '../contexts/ArtContext';

const Products = () => {
  const { post, addItem } = useContext(ArtContext);

  return (
    <div className="container">
      {post.map(product => (
        <div className="container">
        <Art key={product._id} product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;