import React, { useState, useContext } from "react";
import "./Header.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { DataContext } from "./DataProvider";

import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";

import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
`;

const Links = styled.ul`
  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    opacity: 0.98;
    z-index: 99;
    transition: 0.5s ease-in;
    padding-left: 0;
  }
`;

export default function Header() {
  const currentUser = useAuth();
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch {}
  }

  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <HeaderStyle>
      <div className="menu" onClick={toggleMenu}>
        <img src={Menu} alt="" width="30" />
      </div>
      <Links style={styleMenu}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={toggleMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/Locations" onClick={toggleMenu}>
            Locations
          </Link>
        </li>

        <li>
          {currentUser.currentUser === null ? (
            <Link to="/Login" onClick={toggleMenu}>
              Login
            </Link>
          ) : (
            <Link onClick={handleLogout} to="/">
              Logout
            </Link>
          )}
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
        <li
          onClick={() => {
            toggleMenu();
            handleLogout();
          }}
        >
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </Links>
    </HeaderStyle>
  );
}
