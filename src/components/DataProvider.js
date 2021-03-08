import React, { createContext, useState, useEffect } from "react";

//Image imports
import Matcha from "../img/matcha.jpg";
import Coffee1 from "../img/coffee1.jpg";
import Coffee2 from "../img/coffee2.jpg";
import Coffee3 from "../img/coffee3.jpg";
import Coffee4 from "../img/coffee4.jpg";
import Coffee5 from "../img/coffee5.jpg";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Matcha Tea",
      images: [Matcha],
      description: "White",
      price: 10,
      count: 1,
    },
    {
      _id: "2",
      title: "Vanilla Ice Latte",
      images: [Coffee1],
      description: "White / Black",
      price: 10,
      content: "Nice!.",
      count: 1,
    },
    {
      _id: "3",
      title: "Hot Latte",
      images: [Coffee2],
      description: "White",
      price: 5,
      count: 1,
    },
    {
      _id: "4",
      title: "Latte",
      images: [Coffee3],
      description: "White",
      price: 6,
      count: 1,
    },
    {
      _id: "5",
      title: "Americano",
      images: [Coffee4],
      description: "Gray",
      price: 8,
      count: 1,
    },
    {
      _id: "6",
      title: "Tea",
      images: [Coffee5],
      description: "White",
      price: 9,
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]); //create state for the cart

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });

    //if check is true then put the product into the cart

    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been already added to cart.");
    }
  };

  //Localhost

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart), [cart]);
  });

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;
