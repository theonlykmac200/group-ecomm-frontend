import "./Nav.scss";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link className="nav__logo" to="/">
          <img src="https://i.imgur.com/DVEoHAP.png" alt="amazon logo" />
        </Link>

        <div className="search">
        <input className="searchInput" type="text" />
      </div>
            
        <div className="nav__cart">
          <Link className="nav__cart-icon" to="/cart">
          </Link>

        
          <div className="nav__cart-count">0</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
