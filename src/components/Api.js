import React from "react";
import Card from "./Card";
function Api() {
  const [data, setdata] = React.useState([]);

  let path =
    window.location.pathname == "/products/category"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com${window.location.pathname}`;

  React.useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setdata(json);
      });
  }, []);
  return (
    <div>
      <Card data={data} />
    </div>
  );
}

function CategoriesApi() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, [data]);
  return data;
}

function TopProducts() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, [data]);
  return data;
}

function ProductsByCat() {
  const [data, setdata] = React.useState([]);
  // console.log(category)
  // let prodCategory = category.toLowerCase()
  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/jewelry`)
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, []);
  return data;
}

export { Api, CategoriesApi, TopProducts, ProductsByCat };
