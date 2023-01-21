import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout">
      <h1 className="checkout__title">Thank you for shopping with Amazon</h1>
      <Link to="/" className="return">
        Return home
      </Link>
    </div>
  );
};

export default Checkout;
