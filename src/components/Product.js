import React from "react";
import "./styles/product.css";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card m-3">
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="price fw-bold text-black-50">
              Price: {product.price}$
            </p>
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
