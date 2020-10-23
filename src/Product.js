/*eslint-disable */
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
	//eslint-disable-next-line
	const [{ basket }, dispatch] = useStateValue();

	// function func1 () {
	//   return basket
	// }

	// {for(var i =0; i <basket.length; i++){
	//   console.log(basket);

	// }}

	const addToBasket = () => {
		//dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((r, i) => (
							<p> ⭐ </p>
						))}
				</div>
			</div>

			<img src={image} alt="" />

			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
