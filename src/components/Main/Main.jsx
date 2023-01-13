import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../../pages/Index/Index";
import Show from "../../pages/Show/Show";
import Cart from "../../pages/Cart/Cart";


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product/:id" element={<Show />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    );
};

export default Main;
