import Gamepad from "../assets/checkout/Gamepad.jpeg";
import LCD from "../assets/checkout/LCD.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import "../styles/Cart.css";

function Cart() {
	return (
		<>
			<div className="container">
				<div className="topele">
					Summer Sale For All Swim Suits And Free Express
					Delievery-Off 50%!
					<a href="">ShopNow</a>
				</div>
				<nav>
					<ul className="navbar">
						<li className="leftnavitem">Exclusive</li>
						<div className="maincontent">
							<li className="navitems">
								<a href="">Home </a>
							</li>
							<li className="navitems">
								<a href="">Contact</a>
							</li>
							<li className="navitems">
								<a href="">About</a>
							</li>
							<li className="navitems">
								<a href="">Sign Up</a>
							</li>
						</div>
						<div className="rightlink">
							<li className="navitems">
								<div className="search-box">
									<input
										type="text"
										placeholder="What are you looking for?"
										className="search-input"
									/>
									<SearchIcon className="navitems search-icon" />
								</div>
							</li>
							<div className="icons">
								<FavoriteIcon className="navitems" />
								<ShoppingCartIcon className="navitems" />
								<PersonIcon className="navitems" />
							</div>
						</div>
					</ul>
				</nav>
			</div>
			<div className="Middle">
				<p id="HomeCart">
					Home &nbsp;/ &nbsp; <b>Cart</b>
				</p>
				<br />
				<br />
				<br />
				<div className="Hug">
					<div id="HugTop">
						<div id="Product">
							<div className="con0">Product</div>
							<div className="con">Price</div>
							<div className="con">Quantity</div>
							<div className="con1">SubTotal</div>
						</div>
						<div id="item">
							<div className="con0">
								<span>
									<img src={LCD} alt="LCD" />
								</span>
								&nbsp;&nbsp;LCD Monitor
							</div>
							<div className="con">$650</div>
							<div className="con">01</div>
							<div className="con1">$650</div>
						</div>
						<div id="item">
							<div className="con0">
								<span>
									<img src={Gamepad} alt="Gamepad" />
								</span>
								&nbsp;&nbsp;H1 Gamepad
							</div>
							<div className="con">$550</div>
							<div className="con">02</div>
							<div className="con1">$1100</div>
						</div>
						<div id="Button">
							<button type="button" id="but1">
								Return To Shop
							</button>
							<button type="button" id="but2">
								Update Cart
							</button>
						</div>
					</div>
					<br />
					<br />
					<div id="HugBot">
						<div id="LBut">
							<input
								type="text"
								name="text"
								id="text"
								placeholder="Coupon Code"
							/>
							<button type="submit" id="coup">
								Apply Coupon
							</button>
						</div>
						<div id="RBut">
							<h2>Cart Total</h2>
							<div id="con">
								<p className="left">Subtotal:</p>
								<p className="right">$1750</p>
							</div>
							<br />
							<hr />
							<div id="con">
								<p className="left">Shipping:</p>
								<p className="right">Free</p>
							</div>
							<br />
							<hr />
							<div id="con">
								<p className="left">Total:</p>
								<p className="right">$1750</p>
							</div>
							<br />
							<br />
							<center>
								<button type="button" id="check">
									Process to Checkout
								</button>
							</center>
							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
			<div className="Footer">
				<div className="Five">
					<ul>
						<li>Exclusive</li>
						<li>Subscribe</li>
						<li>Get 10% Off on Your First Order</li>
						<li>
							<div className="butt">
								<input
									type="text"
									name="mail"
									id="mail"
									placeholder="Enter your Email"
								/>{" "}
								<button id="send">
									<SendIcon></SendIcon>
								</button>
							</div>
						</li>
					</ul>
				</div>
				<div className="Five">
					<ul>
						<li>Support</li>
						<li>Vellore - 632014, Tamil Nadu, India</li>
						<li>exclusive@gmail.com</li>
						<li>+91 1234-5678-90</li>
					</ul>
				</div>
				<div className="Five">
					<ul>
						<li>Account</li>
						<li>My Account</li>
						<li>Login/Register</li>
						<li>Cart</li>
						<li>Wishlist</li>
						<li>Shop</li>
					</ul>
				</div>
				<div className="Five">
					<ul>
						<li>Quick Link</li>
						<li>Privacy Policy</li>
						<li>Terms of Use</li>
						<li>FAQ</li>
						<li>Contact</li>
					</ul>
				</div>
				<br />
				<br />
			</div>
			<h4 id="copy">&copy; Copyright Rimel 2022. All rights reserved</h4>
		</>
	);
}

export default Cart;
