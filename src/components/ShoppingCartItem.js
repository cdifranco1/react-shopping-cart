import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = (props) => {
  console.log(props)
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={props.removeItem}>Remove from item</button>
			</div>
		</div>
	);
};

export default Item;
