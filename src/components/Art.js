import React,{useContext} from 'react';
import {Link} from "react-router-dom"
import ProductContext from '../contexts/ArtContext';
import "../css/artWork.css"

const Art = props => {
	const { post, addItem } = useContext(ProductContext);
	return (
		
		<div className ="imgcontainer" key={props.product._id}>
			<div className = "img_link">
		         <Link to = {`/artInfo/${props.product._id}` }>
					<img src={props.product.imageUrl} alt={`${props.product.title}`} />
				  </Link>
			</div>
			<div className ="caption">{props.product.title}</div>

	
		</div>
		
	);
};

export default Art;