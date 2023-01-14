import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../../pages/Index/Index";
import Show from "../../pages/Show/Show";
import Cart from "../../pages/Cart/Cart";


const Main = () => {

  const [products, setProducts] = useState(null);

  const URL = "https://group-3proj.herokuapp.com/product";

  const getProducts = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Index products={products} />} />
        <Route path="/product/:id" element={<Show products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
