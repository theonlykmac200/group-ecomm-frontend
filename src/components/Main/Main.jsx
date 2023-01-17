import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../../pages/Index/Index";
import Show from "../../pages/Show/Show";
import Cart from "../../pages/Cart/Cart";
import SignupPage from "../../pages/Signup/SignupPage";
import LoginPage from "../../pages/Login/LoginPage";
import ProtectedRoute from "../Protected-Route";
import { getToken } from "../../services/tokenService";

const Main = (props) => {
  // const [products, setProducts] = useState(null);

  // const URL = "https://group-3proj.herokuapp.com/product";

  // const getProducts = async () => {
  //   const res = await fetch(URL);
  //   const data = await res.json();
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={props.user}>
              <Index products={props.products} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute user={props.user}>
              <Show products={props.products} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute user={props.user}>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<SignupPage {...props} />} />
        <Route path="/login" element={<LoginPage {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;
