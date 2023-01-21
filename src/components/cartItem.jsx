import React from "react";

const CartItem = ({
  count,
  handleDecrement,
  handleIncrement,
  handleDelete,
  product,
}) => {
  return (
    <div className="cart__item" key={product._id}>
      <img src={product.img} alt={product.Title} />
      <p className="cart__item-title">{product.Title.slice(0, 55) + "..."}</p>
      {/* <div className="cart__item-qty">
        <span onClick={handleDecrement}>-</span>
        <p>{count}</p>
        <span onClick={handleIncrement}>+</span>
      </div> */}
      <button id="delete" onClick={() => handleDelete(product._id)}>
        Delete
      </button>
      <p>${product.Price}</p>
    </div>
  );
};

export default CartItem;
