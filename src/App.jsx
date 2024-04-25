import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Wishlist from "./routes/Wishlist";
import ProductDetail from "./routes/ProductDetail";
import Account from "./routes/Account";
import LogIn from "./routes/Login";
import SignUp from "./routes/SignUp";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";
import "./index.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/about" element={<About />}></Route>
				<Route path="/wishlist" element={<Wishlist />}></Route>
				<Route
					path="/product-detail"
					element={<ProductDetail />}
				></Route>
				<Route path="/account" element={<Account />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/sign-up" element={<SignUp />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
				<Route path="/checkout" element={<Checkout />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
