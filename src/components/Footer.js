import React from "react";
import { Link } from "react-router-dom";
import "./FooterTest.scss";

function Footer() {
  return (
    <div className="row-container">
      <div className="column">
        <span className="column-title">About</span>
        <ul>
          <li>
            <Link to="/">Press</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Stores</Link>
          </li>
        </ul>
      </div>
      <div className="column">
        <span className="column-title">Customer Service</span>
        <ul>
          <li>
            <Link to="/">Help</Link>
          </li>
          <li>
            <Link to="/">Call</Link>
          </li>
          <li>
            <Link to="/">Orders</Link>
          </li>
        </ul>
      </div>
      <div className="column">
        <span className="column-title">Contact Us</span>
        <ul>
          <li>
            <Link to="/">(134)548-5851</Link>
          </li>
        </ul>
      </div>
      <div className="column">
        <span className="column-title">Social Media</span>
        <ul>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Tiktok</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
