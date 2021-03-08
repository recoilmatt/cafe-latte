import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../components/DataProvider";

import { Link } from "react-router-dom";

import "./Cart.css";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      <div style={{ height: "70vh" }}>
        <h4
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            padding: "50px",
          }}
        >
          <h1>Your Shopping Cart</h1>
          You have no items in your cart.
        </h4>
      </div>
    );

  return (
    <div className="cart-container">
      <h1 style={{ paddingBottom: "16px" }}>Your Shopping Cart</h1>
      {cart.map((product) => (
        <div className="cart" key={product._id}>
          <div className="product-container">
            <img src={product.images[0]} alt="img" />
          </div>

          <div className="product-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>

            <div className="amount">
              <button className="count" onClick={() => reduction(product._id)}>
                -
              </button>
              <span>{product.count}</span>
              <button className="count" onClick={() => increase(product._id)}>
                +
              </button>
            </div>

            <div
              className="delete"
              style={{ padding: "16px" }}
              onClick={() => removeProduct(product._id)}
            >
              x
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: $ {total}</h3>
      </div>

      <Link to="/payment" className="checkout-button">
        Checkout
      </Link>
    </div>
  );
}
