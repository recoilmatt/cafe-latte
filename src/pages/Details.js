import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/DataProvider";
import { Link } from "react-router-dom";

// CSS
import "./Details.css";
import styled from "styled-components";

const BoxDetails = styled.section`
  max-width: 500px;
  padding-right: 5%;
`;

function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;

  const [index, setIndex] = useState(0);

  const addCart = value.addCart;

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  return (
    <section className="details-container">
      {details.map((product) => (
        <div className="details" key={product._id}>
          <BoxDetails>
            <img
              src={product.images[index]}
              style={{ objectFit: "contain", height: "400px" }}
              alt="/"
            />
          </BoxDetails>
          <BoxDetails>
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <Link
              to="/cart"
              className="cart-button"
              onClick={() => addCart(product._id)}
            >
              Add to Cart
            </Link>
          </BoxDetails>
        </div>
      ))}
    </section>
  );
}

export default Details;
