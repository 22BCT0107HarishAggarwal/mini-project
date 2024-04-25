import SignImage from "../assets/login_signup/login_signup.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import "../styles/SignUp.css";

function SignUp() {
	return (
		<>
			<div className="container">
				<div className="topele">
					Summer Sale For All Swim Suits And Free Express
					Delievery-Off 50%!
					<a href="">ShopNow</a>
				</div>
				<div className="navclass">
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
			</div>
			<div className="Content">
				<div className="Pic">
					<img src={SignImage} alt="Image.jpeg" />
				</div>
				<div className="Acc">
					<div className="main">
						<div>
							<br />
							<br />
							<h1>Create an Account</h1>
							<div>
								<br />
								<br />
								<h3>Enter your Details Below</h3>
								<br />
								<br />
								<form action="">
									<input
										type="text"
										name="Name"
										id="Name"
										placeholder="Name"
									/>
									<br />
									<br />
									<br />
									<input
										type="text"
										name="Name"
										id="Contact"
										placeholder="Email or Phone Number"
									/>
									<br />
									<br />
									<br />
									<input
										type="text"
										name="Name"
										id="Pass"
										placeholder="Password"
									/>
									<br />
									<br />
									<button className="create">
										Create Account
									</button>
									<br />
									<br />
									<button className="goog">
										Sign Up with Google
									</button>
									<br />
									<br />
									<h4>
										Already have Account? <u>Log in</u>
									</h4>
								</form>
							</div>
						</div>
						<div></div>
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
									<SendIcon className="material-symbols-outlined"></SendIcon>
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
			</div>
			<h4 id="copy">&copy; Copyright Rimel 2022. All rights reserved</h4>
		</>
	);
}

export default SignUp;
