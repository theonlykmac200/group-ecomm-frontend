import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ name, description, price, quantity, id, img }) {
  return (
    <div className="product">
      <Link className="link" to={`/product/${id}`}>
        <p className="product_name">{name.slice(0, 70) + "..."}</p>
        <p className="product_price">${price}.99</p>
        <p className="product_quant">{quantity}</p>
        <img className="product_img" src={img} alt={name} />
      </Link>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
