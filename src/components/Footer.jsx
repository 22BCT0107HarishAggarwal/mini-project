import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-black p-20 text-white grid grid-cols-2 lg:grid-cols-4 gap-20">
			<div className="min-w-fit max-w-full flex flex-col gap-5 text-footer-text mt-5">
				<h3 className="mb-4 font-semibold text-white">Support</h3>
				<div className=" flex gap-2 text-xs">
					<div>
						#121, 1st Floor, Dr. M.G.R. Block <br />
						Vellore Institute of Technology (VIT)
						<br /> Vellore-632 014
					</div>
				</div>
				<div className="flex gap-2 text-xs">
					<div>
						director.sw@vit.ac.in
						<br /> events.sw@vit.ac.in
					</div>
				</div>
				<div className="flex gap-2 text-xs">
					<div>
						Phone: +91-416-2202034 / 2007 <br />
						Fax: +91-416-2243092
					</div>
				</div>
			</div>
			<div className="w-full mt-5">
				<h3 className="mb-4 font-semibold text-white">Account</h3>
				<ul className="flex flex-col gap-2 text-footer-text">
					<li>
						<Link
							to="/account"
							className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
						>
							My Account
						</Link>
					</li>
					<li>
						<Link
							to="/login"
							className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
						>
							Login
						</Link>
					</li>
					<li>
						<Link
							to="/sign-up"
							className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
						>
							Register
						</Link>
					</li>
					<li>
						<Link
							to="/checkout"
							className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
						>
							Checkout
						</Link>
					</li>
					<li>
						<Link
							to="/wishlist"
							className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
						>
							Wishlist
						</Link>
					</li>
					<li>
						<Link
							to="/product-detail"
							className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
						>
							Shop
						</Link>
					</li>
				</ul>
			</div>
			<div className="w-full mt-5">
				<h3 className="mb-4 font-semibold text-white">Quick Link</h3>
				<ul className="flex flex-col gap-2 text-footer-text">
					<li>Privacy Policy</li>
					<li>Terms of Use</li>
					<li>FAQs</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="w-full mt-5">
				<h3 className="mb-4 font-semibold text-white">Download App</h3>
				<ul className="flex flex-col gap-2 text-footer-text">
					<li>Instagram</li>
					<li>Facebook</li>
					<li>LinkedIn</li>
					<li>X (Twitter)</li>
				</ul>
			</div>
		</footer>
	);
}
