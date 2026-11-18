import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.jpeg";

function Footer() {

  const styles = `
    .softech-footer {
      background: #212529;
      color: white;
      padding: 30px 0;
    }

    .softech-footer-logo {
      width: 70px;
      height: 70px;
      object-fit: contain;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .softech-footer h5 {
      font-weight: bold;
      margin-bottom: 15px;
    }

    .softech-footer p {
      color: #ccc;
      margin-bottom: 8px;
    }

    .softech-footer a {
      color: #ccc;
      text-decoration: none;
    }

    .softech-footer a:hover {
      color: white;
    }

    .softech-footer hr {
      border-color: #555;
    }

    .footer-bottom {
      text-align: center;
      margin-top: 15px;
    }

    .footer-bottom p {
      margin: 0;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .softech-footer {
        text-align: center;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <footer className="softech-footer">

        <Container>

          <Row>

            <Col md={4} className="mb-3">

              <img
                src={logo}
                alt="Softech Logo"
                className="softech-footer-logo"
              />

              <h5>SOFTECH</h5>

              <p>
                Learn. Build. Grow.
              </p>

            </Col>

            <Col md={4} className="mb-3">

              <h5>Quick Links</h5>

              <Nav className="flex-column">

                <Nav.Link href="/" className="text-light">
                  Home
                </Nav.Link>

                <Nav.Link href="/courses" className="text-light">
                  Courses
                </Nav.Link>

                <Nav.Link href="/login" className="text-light">
                  Login
                </Nav.Link>

              </Nav>

            </Col>

            <Col md={4} className="mb-3">

              <h5>Contact</h5>

              <p>Email: softech@gmail.com</p>

              <p>Phone: +91 9876543210</p>

              <p>India</p>

            </Col>

          </Row>

          <hr />

          <div className="footer-bottom">

            <p>
              © 2026 Softech. All Rights Reserved.
            </p>

          </div>

        </Container>

      </footer>
    </>
  );
}

export default Footer;