import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState({});

  // useEffect(() => {
  //   const Cart = JSON.parse(localStorage.getItem("cart"));
  //   if (Cart) {
  //     setCart(Cart);
  //   }
  // }, []);

  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Shopping Cart</h1>
        <div className="cart__item">
          <div className="cart__item-img"></div>
          <p className="cart__item-title">Product Title</p>
          <div className="cart__item-qty">
            Qty:
            <span>-</span>
            <p>1</p>
            <span>+</span>
          </div>

          <button id="delete">Delete</button>
          <p>$29.99</p>
        </div>
      </div>
      <aside className="subtotal">
        <h1>Subtotal (3 items)</h1>
        <p>$89.97</p>
        <button>Checkout</button>
      </aside>
    </div>
  );
};

export default Cart;
