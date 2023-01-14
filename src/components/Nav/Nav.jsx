import "./Nav.scss";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link className="nav__logo" to="/">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
        </Link>
        <div className="search">
          <input className="searchInput" type="text" />
        </div>
        <div className="nav__cart">
          <Link className="nav__cart-icon" to="/cart">
            <ShoppingCartIcon />
          </Link>
          <div className="nav__cart-count">0</div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;