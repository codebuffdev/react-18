import {APP_LOGO_URL} from "../utils/constant";
import {CART_IMG} from "../utils/constant";
import {useState} from "react";

const Header = () => {
	const [isLogin, setLogin] = useState(false);

	const changeLoginStatus = () => {
		setLogin(!isLogin);
	};

	return (
		<div className="header">
			<div className="logo">
				<img src={APP_LOGO_URL} alt={"APP-LOGO"}/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>Contact Us</li>
					<li><img src={CART_IMG} alt={"cart"} id="cart-img"/></li>
					<button onClick={changeLoginStatus} className={"login-btn"}>{isLogin ? "logout" : "login"}</button>
				</ul>
			</div>
		</div>
	)
};

export default Header;
