import React from "react";
import "./Product.css";

function Product ({name, description, price, quantity}) {
  return <div className="product">
    <p>Product name</p>
    <div className="product_desc">
      <p>Product description</p>
      <div className="product_price">
        <p>Product price</p>
      <div className = "product_quant"></div>
      <p>Product quantity</p>
      </div>
    </div>
  </div>;

 
  <button>Add to basket</button>
};

export default Product;