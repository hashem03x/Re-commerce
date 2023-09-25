import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [category, setCatergory] = useState([]);
  const api = "https://fakestoreapi.com/products";
  function getProducts() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }
  function getCategories() {
    fetch(`${api}/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCatergory(data);
      });
  }
  const getCatItems = (catName) => {
    fetch(`${api}/category/${catName}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="title p-3">
          <h3 className="text-black fw-bold"> Our Products</h3>
        </div>
        <div className="categories text-center p-3 d-flex align-items-center flex-wrap justify-content-around">
          <button
            className="btn btn-info text-white fw-bold m-3 ps-3 pe-3"
            onClick={() => getProducts()}
          >
            All
          </button>
          {category.map((cat) => {
            return (
              <button
                key={cat}
                className="btn btn-info text-white fw-bold m-3 ps-3 pe-3"
                onClick={() => {
                  getCatItems(cat);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="row">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
