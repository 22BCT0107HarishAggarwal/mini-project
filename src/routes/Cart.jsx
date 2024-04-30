import { useEffect } from "react";

function Cart() {
	useEffect(() => {
		window.location.href = "/cart/Cart.html";
	}, []);

	return null;
}

export default Cart;
