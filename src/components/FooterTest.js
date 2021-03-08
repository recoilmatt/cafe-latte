import React from "react";
import "./FooterTest.scss";
import { Link } from "react-router-dom";
import "./FooterTest.scss";

function FooterTest() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Product</span>
              </li>
              <li className="nav-item">
                <Link to="/">Cafe</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Latte</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Plans & Prices</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Frequently asked questions</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Company</span>
              </li>
              <li className="nav-item">
                <Link to="/">About us</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Job postings</Link>
              </li>
              <li className="nav-item">
                <Link to="/">News and articles</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Contact</span>
              </li>
              <li className="nav-item">
                <Link to="/">Facebook</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Instagram</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Tiktok</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterTest;
