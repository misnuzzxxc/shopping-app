import React from "react";
import Navbar from "../components/Navbar";
import CategoriesBox from "../components/CategoriesBox";
import Hero from "../components/Hero";
import HeroImg from "../images/Online shopping-pana.png";
import men from "../images/men.jpeg";
import women from "../images/women.jpeg";
import jewel from "../images/jewel.jpeg";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer/Footer";

function Home() {
  const categories = [
    {
      title: "MEN'S WEAR",
      text: "Shop for winter fabrics and beautiful prints that can be tailored as per your style.",
      image: men,
    },
    {
      title: "JEWELRY",
      text: "Shop for winter fabrics and beautiful prints that can be tailored as per your style.",
      image: jewel,
    },
    {
      title: "WOMEN'S WEAR",
      text: "Shop for winter fabrics and beautiful prints that can be tailored as per your style.",
      image: women,
    },
  ];
  return (
    <div>
      <Navbar />
      <Hero hero={HeroImg} />
      <CategoriesBox categories={categories} />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default Home;
