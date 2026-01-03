import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import ProductDetail from "./pages/productDetail";

const Router = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/product/:id" element={<ProductDetail />} />
  </Routes>
);

export default Router;
