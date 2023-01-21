import "./Cart.css";
import { useState, useEffect } from "react";
import CartItem from "../../components/cartItem";
import { useNavigate } from "react-router-dom";

const Cart = ({ count, setCount }) => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(null);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const getSubtotal = (arr) => {
    let subtotal = 0;
    for (let i = 0; i < arr.length; i++) {
      subtotal += arr[i].Price;
    }
    return subtotal;
  };
  const handleDelete = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter((product) => product._id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };

  const handleCheckout = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
    navigate("/");
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
            <CartItem
              key={product._id}
              product={product}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              handleDelete={handleDelete}
              count={count}
            />
          );
        })}
      </div>
      <aside className="subtotal">
        <h1>Subtotal ({cart.length} items)</h1>
        <p>${parseFloat(getSubtotal(cart)).toFixed(2)}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </aside>
    </div>
  );
};

export default Cart;