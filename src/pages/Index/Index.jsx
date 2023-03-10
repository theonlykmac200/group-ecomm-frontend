import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import "./Index.scss";

const Index = ({ products, count, setCount }) => {
  const addToCart = (product) => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    // if (cart.filter((p) => p._id === product._id).length > 0) {
    //   setCount(count++);
    // } else {
    cart.push(product);
    // }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  function loaded() {
    return products.map((product) => {
      console.log(product._id);
      return (
        <Product
          className="product"
          product={product}
          name={product.Title}
          description={product.desc}
          price={product.Price}
          img={product.img}
          id={product._id}
          addToCart={addToCart}
        />
      );
    });
  }
  function loading() {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <>
      <div className="wallpaper-container">
        <img
          className="image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="products">
        <div className="gradient"></div>
        {products ? loaded() : loading()}
      </div>
    </>
  );
};

export default Index;
