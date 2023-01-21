import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

function Product({ product, name, addToCart, price, quantity, id, img }) {
  return (
    <div className="product">
      <Link className="link" to={`/product/${id}`}>
        <p className="product_name">{name.slice(0, 70) + "..."}</p>
        <p className="product_price">${price}</p>
        <div className="rating">
          <StarIcon id="product_rating" />
          <StarIcon id="product_rating" />
          <StarIcon id="product_rating" />
          <StarIcon id="product_rating" />
        </div>
        <p className="product_quant">{quantity}</p>
        <img className="product_img" src={img} alt={name} />
      </Link>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default Product;
