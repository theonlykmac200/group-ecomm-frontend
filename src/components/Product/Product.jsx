import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ name, description, price, quantity, id }) {
  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <p className="product_name">{name}</p>
        <p className="product_price">{price}</p>
        <p className="product_quant">{quantity}</p>
      </Link>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
