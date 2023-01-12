import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav__links">
        <Link to="/">AMAZON</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Nav;
