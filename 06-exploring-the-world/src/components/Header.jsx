import {APP_LOGO_URL} from "../utils/constant";
import {CART_IMG} from "../utils/constant";

const Header = () => (
    <div className="header">
        <div className="logo">
            <img src={APP_LOGO_URL} alt={"APP-LOGO"}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Login</li>
                <li><img src={CART_IMG} alt={"cart"} id="cart-img"/></li>
            </ul>
        </div>
    </div>
);

export default Header;
