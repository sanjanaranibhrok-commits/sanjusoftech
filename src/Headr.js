import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Cart from "./Cart";

import {
  FaShoppingCart,
  FaSearch,
  FaMapMarkerAlt,
  FaUser,
  FaBoxOpen,
  FaThLarge,
  FaHome
} from "react-icons/fa";

function Headr() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [userMobile, setUserMobile] = useState(
    localStorage.getItem("userMobile") || ""
  );

  const [cartOpen, setCartOpen] = useState(false);

  const [cartCount, setCartCount] = useState(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      return cart.reduce(
        (sum, item) => sum + (item.count || 1),
        0
      );
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(
        localStorage.getItem("isLoggedIn") === "true"
      );

      setUserMobile(
        localStorage.getItem("userMobile") || ""
      );
    };

    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        setCartCount(
          cart.reduce(
            (sum, item) => sum + (item.count || 1),
            0
          )
        );
      } catch {
        setCartCount(0);
      }
    };

    checkLogin();
    updateCartCount();

    window.addEventListener("focus", checkLogin);
    window.addEventListener("focus", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("focus", checkLogin);
      window.removeEventListener("focus", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userMobile");

    setIsLoggedIn(false);
    setUserMobile("");

    alert("Logged Out Successfully");
  };

  const openCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      setCartCount(
        cart.reduce(
          (sum, item) => sum + (item.count || 1),
          0
        )
      );
    } catch {
      setCartCount(0);
    }

    setCartOpen(true);
  };

  return (
    <>
      <style>
        {`
          .brand {
            color: green;
            font-size: 20px;
            font-weight: bold;
          }

          .menu {
            color: #333 !important;
            font-weight: 600;
            margin: 0 5px;
            padding: 10px 8px !important;
            border-radius: 8px;
          }

          .menu svg {
            color: green;
            margin-right: 5px;
          }

          .menu:hover {
            background: #eaf7ef;
            color: green !important;
          }

          .location-box {
            white-space: nowrap;
          }

          .cart {
            min-width: 95px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            background: green;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 8px 14px;
          }

          .cart:hover {
            background: #218838;
          }

          .account-title {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 600;
          }

          .account-dropdown .dropdown-menu {
            width: 250px;
            border: none;
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          }

          .account-header {
            padding: 12px 18px;
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #eee;
          }

          .account-header strong {
            color: #53677d;
            font-size: 17px;
          }

          .account-header small {
            color: #777;
            margin-top: 4px;
          }

          @media (max-width: 991px) {
            .menu {
              margin: 3px 0;
            }

            .cart {
              width: 100%;
              margin: 10px 0 !important;
            }

            .location-box {
              margin: 12px 0;
            }
          }
        `}
      </style>

      <Navbar
        bg="white"
        expand="lg"
        sticky="top"
        className="shadow-sm"
        style={{
          minHeight: "90px",
          borderBottom: "2px solid #eee"
        }}
      >
        <Container fluid className="px-4">

          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <span className="brand">
              <FaShoppingCart className="me-2" />
              Family First Mart
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            {/* Location */}
            <div className="location-box me-lg-4">
              <div className="fw-bold">
                <FaMapMarkerAlt className="text-success me-1" />
                Sirsa
              </div>

              <small className="text-muted">
                Haryana, India
              </small>
            </div>

            {/* Search */}
            <Form
              className="d-flex mx-lg-3 my-2 flex-grow-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaSearch className="text-success" />
                </span>

                <Form.Control
                  type="search"
                  placeholder="Search for products..."
                  style={{
                    height: "45px",
                    boxShadow: "none"
                  }}
                />
              </div>
            </Form>

            {/* Menu */}
            <Nav className="align-items-lg-center">

              <Nav.Link as={Link} to="/" className="menu">
                <FaHome /> Home
              </Nav.Link>

              <Nav.Link as={Link} to="/products" className="menu">
                <FaShoppingCart /> Products
              </Nav.Link>

              <Nav.Link as={Link} to="/categories" className="menu">
                <FaThLarge /> Categories
              </Nav.Link>

              {!isLoggedIn ? (
                <Nav.Link as={Link} to="/lgin" className="menu">
                  <FaUser /> Login
                </Nav.Link>
              ) : (
                <NavDropdown
                  title={
                    <span className="account-title">
                      <FaUser />
                      My Account
                    </span>
                  }
                  id="account-dropdown"
                  align="end"
                  className="account-dropdown"
                >
                  <div className="account-header">
                    <strong>My Account</strong>
                    <small>{userMobile}</small>
                  </div>

                  <NavDropdown.Item as={Link} to="/orders">
                    <FaBoxOpen className="me-2" />
                    My Orders
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    onClick={handleLogout}
                    className="text-danger"
                  >
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              )}

            </Nav>

            {/* Cart Button */}
            <button
              className="cart"
              onClick={openCart}
            >
              <FaShoppingCart />
              Cart ({cartCount})
            </button>

            {/* Cart Drawer */}
            <Cart
              open={cartOpen}
              onClose={() => setCartOpen(false)}
            />

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Headr;

