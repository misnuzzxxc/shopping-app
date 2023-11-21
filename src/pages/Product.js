import React from "react";
import { Api } from "../components/Api";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { categories } from "./Home.js";
function Product() {
  return (
    <div>
      <Navbar />
      <Api />
      <Footer />
    </div>
  );
}

export default Product;
