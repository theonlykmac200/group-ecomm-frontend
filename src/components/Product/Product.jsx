import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ name, description, price, quantity }) {
  return (
    <Link to={`/product/:id`} >
    <div className="product">
      <p className="product_name">{name}</p>
      <p className="product_price">{price}</p>
      <p className="product_desc">{description}</p>
      <p className="product_quant">{quantity}</p>
      <button>Add to cart</button>
    </div>
    </Link>
  );
}

export default Product;

