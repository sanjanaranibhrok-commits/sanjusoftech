import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import logo from "./logo.jpeg";
import { Link } from "react-router-dom";

function Header() {

  const styles = `
    .softech-header {
      min-height: 70px;
      background: #2c3e50;
      color: white;
    }

    .softech-header .container {
      padding: 0 25px;
    }

    .softech-header .navbar-nav {
      gap: 15px;
    }

    .softech-header .nav-link {
      color: white !important;
      font-size: 15px;
    }

    .softech-header .nav-link:hover {
      color: #ecf0f1 !important;
    }

    .softech-header .login-btn {
      background: white;
      color: #2c3e50;
      border: none;
      border-radius: 5px;
      padding: 9px 16px;
      font-size: 14px;
    }

    .softech-header .login-btn:hover {
      background: #ecf0f1;
      color: #2c3e50;
    }

    @media (max-width: 768px) {
      .softech-header .container {
        padding: 0 15px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <Navbar expand="lg" data-bs-theme="dark" className="softech-header">
        <Container>

          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Softech Logo"
              width="120"
              height="45"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            <Nav className="mx-auto">

              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              {/* Static Courses Page */}
              <Nav.Link as={Link} to="/courses">
                Courses
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

            </Nav>

            <Button
              as={Link}
              to="/login"
              className="login-btn"
            >
              Login
            </Button>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default Header;
