import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Shopping Cart</h1>
        <div className="cart__item">
          <div className="cart__item-img"></div>
          <p className="cart__item-title">Product Title</p>
          <p className="cart__item-qty">
            Qty:
            <select name="qty">
              <option default value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </p>

          <button className="delete">Delete</button>
          <p>$29.99</p>
        </div>
        <div className="cart__item">
          <div className="cart__item-img"></div>
          <p className="cart__item-title">Product Title</p>
          <p className="cart__item-qty">
            Qty:
            <select name="qty">
              <option default value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </p>

          <button className="delete">Delete</button>
          <p>$29.99</p>
        </div>
        <div className="cart__item">
          <div className="cart__item-img"></div>
          <p className="cart__item-title">Product Title</p>
          <p className="cart__item-qty">
            Qty:
            <select name="qty">
              <option default value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </p>

          <button className="delete">Delete</button>
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
