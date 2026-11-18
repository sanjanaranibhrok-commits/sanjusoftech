import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <style>
        {`
          .main-navbar {
            background-color: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          }

          .logo {
            width: 150px;
            height: 150px;
            object-fit: contain;
          }

          .nav-link {
            color: #10265c !important;
            font-weight: 600;
            margin: 0 8px;
          }

          .nav-link:hover {
            color: #0d6efd !important;
          }

          .login-btn {
            background-color: #0d6efd;
            color: white !important;
            border-radius: 25px;
            padding: 8px 22px !important;
          }

          .login-btn:hover {
            background-color: #084298;
            color: white !important;
          }
        `}
      </style>

      <Navbar expand="lg" className="main-navbar">
        <Container>

          {/* LTS LOGO */}

          <Navbar.Brand as={Link} to="/">
            <img
              src="/logolts.jpg"
              className="logo"
              alt="LTS - Ladder To Success"
            />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto">

              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/course">
                Courses
              </Nav.Link>

              <Nav.Link as={Link} to="/faculty">
                Faculty
              </Nav.Link>

              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>

              

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/login"
                className="login-btn"
              >
                👤 Login
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;