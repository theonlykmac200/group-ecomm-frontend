import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Shopping Cart</h1>
        {cart.map((product) => {
          return (
            <div className="cart__item">
              <img src={product.img} alt={product.Title} />
              <p className="cart__item-title">
                {product.Title.slice(0, 30) + "..."}
              </p>
              <div className="cart__item-qty">
                Qty:
                <span>-</span>
                <p>{product.qty}</p>
                <span>+</span>
              </div>

              <button id="delete">Delete</button>
              <p>{product.Price}</p>
            </div>
          );
        })}
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
