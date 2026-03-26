import { APP_LOGO_URL } from "../utils/constant.js";

// Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={APP_LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <img
              id="cart-img"
              src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
              alt="cart"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
