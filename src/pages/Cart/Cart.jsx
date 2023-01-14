import "./Cart.css";
import Subtotal from "../../components/Subtotal/Subtotal";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Shopping Cart</h1>
        <div className="cart__item">
          <div className="cart__item-img"></div>
          <p className="cart__item-title">Product Title</p>
          <button className="delete">Delete</button>
          <p>$29.99</p>
        </div>
      </div>
      <aside>
        <Subtotal />
      </aside>
    </div>
  );
};

export default Cart;
