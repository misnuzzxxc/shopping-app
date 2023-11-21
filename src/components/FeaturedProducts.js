import React from "react";
import { TopProducts } from "./Api";
import ProductCard from "./Card";

const FeaturedProducts = () => {
  const FeaturedProducts = TopProducts();
  return (
    <div>
      <h3>TOP PRODUCTS</h3>
      <ProductCard data={FeaturedProducts} />
    </div>
  );
};

export default FeaturedProducts;
