import React from "react";
import Products from "../components/Products";
import { Container } from "react-bootstrap";

function Menu() {
  return (
    <Container
      fluid="xl"
      style={{
        width: "100vw",
        paddingTop: "2%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Products />
    </Container>
  );
}

export default Menu;
