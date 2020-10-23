/*eslint-disable */
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	// var sum1 = 0;

	// const sumTotal = () => {
	//   // var  = 0;
	//   Object.keys(basket).map((key, index) => {
	//     console.log (value += basket[index].price);
	//   });
	// };

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
