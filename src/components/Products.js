import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

import "./Products.css";

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <img src={product.images[0]} alt="/" />
          <div className="box">
            <h4 title={product.title}>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
            </h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
