import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Product from "../pages/Product";

function Navbar() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/category" element={<Product />}>
          <Route index element={<Product />} />
          <Route path="jewelery" element={<Product />} />
          <Route path="electronics" element={<Product />} />
          <Route path="men%20clothing" element={<Product />} />
          <Route path="categorywo/men%20clothing" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Navbar;
