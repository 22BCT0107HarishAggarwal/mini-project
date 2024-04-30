import { useEffect } from "react";

function Checkout() {
	useEffect(() => {
		window.location.href = "/checkout/Checkout.html";
	}, []);

	return null;
}

export default Checkout;
