import "./Nav.scss";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Nav = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    // our api to fetch the search result
    console.log("search", searchTerm);
  };

  return (
    <nav className="nav">
      <div className="nav__links">
        <Link className="nav__logo" to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </Link>

        <div className="search">
          <input
            className="searchInput"
            type="text"
            value={value}
            onChange={onChange}
          />
          <SearchIcon onClick={() => onSearch(value)} className="searchicon" />
        </div>
        <div className="dropdown"></div>

        <div className="nav__option">
          <span className="nav__One">Hello, sign in</span>
          <span className="nav__Two">Your Account</span>
        </div>

        <div className="nav__option">
          <span className="nav__One">Returns</span>
          <span className="nav__Two">& Orders</span>
        </div>

        <div className="nav__option">
          <span className="nav__One">Try</span>
          <span className="nav__Two">Prime</span>
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
