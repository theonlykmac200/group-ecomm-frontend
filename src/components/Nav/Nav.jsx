import "./Nav.scss";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Nav = ({ products }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
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
          <div className="dropdown">
            {products
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.Title.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .map((item) => (
                <div
                  onClick={() => onSearch(item.Title)}
                  className="dropdown-row"
                  key={item._id}
                >
                  <SearchIcon id="icon-search" />
                  {item.Title.slice(0, 60) + "..."}
                </div>
              ))}
          </div>
        </div>

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
