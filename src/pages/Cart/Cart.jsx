import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const getSubtotal = () => {
    cart.reduce(function (prev, current) {
      return prev + +current.Price;
    }, 0);
  };

  return !cart ? (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Shopping Cart</h1>
        <div className="cart_item"></div>
      </div>
      <aside className="subtotal">
        <h1>Subtotal (0 items)</h1>
        <p>0</p>
        <button>Checkout</button>
      </aside>
    </div>
  ) : (
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
              <span onClick={handleDecrement}>-</span>
              <p>{count}</p>
              <span onClick={handleIncrement}>+</span>
              </div>
              <button id="delete">Delete</button>
              <p>{product.Price}</p>
            </div>
          );
        })}
      </div>
      <aside className="subtotal">
        <h1>Subtotal ({cart.length} items)</h1>
        <p>{getSubtotal}</p>
        <button>Checkout</button>
      </aside>
    </div>
  );
};

export default Cart;
