import React from "react";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <>
      <style>
        {`
          .footer {
            background: green;
            color: white;
            margin-top: 40px;
          }

          .footer-container {
            display: flex;
            justify-content: space-around;
            gap: 40px;
            padding: 40px 50px;
            flex-wrap: wrap;
          }

          .footer-box {
            width: 250px;
          }

          .footer-box h2 {
            margin-bottom: 15px;
          }

          .footer-box h3 {
            margin-bottom: 15px;
          }

          .footer-box p {
            line-height: 1.6;
            color: #ddd;
          }

          .footer-box a {
            display: block;
            color: white;
            text-decoration: none;
            margin-bottom: 10px;
          }

          .footer-box a:hover {
            color: #27ae60;
          }

          .footer-bottom {
            text-align: center;
            border-top: 1px solid #555;
            padding: 15px;
          }

          .footer-bottom p {
            margin: 0;
            color: #ddd;
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-box">
            <h2>Family First Mart</h2>
            <p>
              Your one-stop shop for groceries, fruits, vegetables,
              dairy, stationery and daily needs.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/cart">Cart</Link>
          </div>

          <div className="footer-box">
            <h3>Contact Us</h3>

            <p>📍 Sirsa, Haryana, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ familyfirstmart@gmail.com</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Family First Mart. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Foot;