import LCD from "../assets/checkout/LCD.jpeg";
import master from "../assets/checkout/master.jpeg";
import visa from "../assets/checkout/visa.jpeg";
import bkash from "../assets/checkout/bkash.jpeg";
import nag from "../assets/checkout/nag.jpeg";
import Gamepad from "../assets/checkout/Gamepad.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import "../styles/Checkout.css";

function Checkout() {
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
			<p id="HomeCart">
				Account &nbsp;/ &nbsp; My Account &nbsp;/&nbsp; Product
				&nbsp;/&nbsp; View Cart &nbsp;/&nbsp;<b>CheckOut</b>
			</p>
			<br />
			<br />
			<div className="main">
				<div id="left">
					<h2>Billing Details</h2>
					<form action="/">
						<div>
							<label htmlFor="fname">First Name </label>
							<br />
							<input
								type="text"
								name="fname"
								id="fname"
								required
							/>
							<br />
							<br />
							<br />
						</div>
						<div>
							<label htmlFor="cname">Company Name </label>
							<br />
							<input type="text" name="cname" id="cname" />
							<br />
							<br />
							<br />
						</div>
						<div>
							<label htmlFor="add">Street Address </label>
							<br />
							<input type="text" name="add" id="add" required />
							<br />
							<br />
							<br />
						</div>
						<div>
							<label htmlFor="floor">
								Apartement, floor, etc. (optional):{" "}
							</label>
							<br />
							<input type="text" name="floor" id="floor" />
							<br />
							<br />
							<br />
						</div>
						<div>
							<label htmlFor="city">Town/City </label>
							<br />
							<input type="text" id="city" required />
							<br />
							<br />
							<br />
						</div>
						<div>
							<label htmlFor="num">Phone Number </label>
							<br />
							<input type="text" id="num" required />
							<br />
							<br />
							<br />
						</div>
						<div>
							<label htmlFor="mail">E-mail Address </label>
							<br />
							<input type="email" id="mail2" required />
							<br />
							<br />
							<br />
						</div>
					</form>
					<input type="checkbox" name="check" id="check" />
					&nbsp;
					<label htmlFor="check" id="checklabel">
						Save this information for faster checkout next time
					</label>
				</div>
				<div id="right">
					<div className="write">
						<div className="con0">
							<span>
								<img src={LCD} alt="LCD" />
							</span>
							&nbsp;&nbsp;LCD Monitor
						</div>
						<div className="con">$650</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<div className="write">
						<div className="con0">
							<span>
								<img src={Gamepad} alt="Gamepad" />
							</span>
							&nbsp;&nbsp;H1 Gamepad
						</div>
						<div className="con">$550</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<div id="con">
						<p className="left1">Subtotal:</p>
						<p className="right1">$1750</p>
					</div>
					<hr />
					<div id="con">
						<p className="left1">Shipping:</p>
						<p className="right1">Free</p>
					</div>
					<hr />
					<div id="con">
						<p className="left1">Total:</p>
						<p className="right1">$1750</p>
					</div>
					<br />
					<div className="bank">
						<input type="radio" name="bank" id="bank" />
						&nbsp;
						<label htmlFor="bank" id="banklabel">
							Bank
						</label>
						<span>
							<img src={nag} alt="nag" />
						</span>
						<span>
							<img src={master} alt="mastercard" />
						</span>
						<span>
							<img src={visa} alt="visa" />
						</span>
						<span>
							<img src={bkash} alt="bkash" />
						</span>
					</div>
					<br />
					<br />
					<input type="radio" name="cod" id="cod" checked />
					&nbsp;
					<label htmlFor="cod" id="codlabel">
						Cash On Delivery
					</label>
					<br />
					<br />
					<div id="LBut">
						<input
							type="text"
							name="text"
							id="text"
							placeholder="Coupon Code"
						/>
						&nbsp;
						<button type="submit" id="coup">
							Apply Coupon
						</button>
					</div>
					<br />
					<button type="submit" id="coup">
						Place Order
					</button>
				</div>
			</div>
			<br />
			<br />
			<br />
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
									name="mail1"
									id="mail1"
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

export default Checkout;
