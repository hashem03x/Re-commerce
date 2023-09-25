import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import "./styles/details.css";
function Details() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const api = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api}/${params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      <div className="container mt-4 text-center">
        <div className="product d-flex align-items-center flex-wrap">
          <div className="image me-4">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="info text-start">
            <div className="title text-black-50 fw-bold mb-4 fs-3">
              {product.title}
            </div>
            <div className="data">
              <p>{product.description}</p>
              <p className="fw-bold text-black-50">Price: {product.price}$</p>
              <p className="fw-bold text-black-50">
                Category: {product.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
