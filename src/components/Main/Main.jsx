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
  const [count, setCount] = useState(1);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={props.user}>
              <Index
                count={count}
                setCount={setCount}
                products={props.products}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute user={props.user}>
              <Show
                count={count}
                setCount={setCount}
                products={props.products}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute user={props.user}>
              <Cart count={count} setCount={setCount} />
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
