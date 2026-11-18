import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";

function Contact() {
  return (
    <div>

      <section id="contact" className="py-5 bg-light">
        <Container>

          <div className="text-center mb-5">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="text-muted">
              Have a question? We would love to hear from you.
            </p>
          </div>

          <Row className="g-4">

            <Col md={5}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">

                  <h3 className="fw-bold mb-4">
                    Get In Touch
                  </h3>

                  <p>
                    <strong>Address</strong>
                    <br />
                    Softech Learning Center, Sirsa, Haryana
                  </p>

                  <p>
                    <strong>Email</strong>
                    <br />
                    info@softech.com
                  </p>

                  <p>
                    <strong>Phone</strong>
                    <br />
                    +91 9876543210
                  </p>

                  <p>
                    <strong>Working Hours</strong>
                    <br />
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </Card.Body>
              </Card>
            </Col>

            <Col md={7}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">

                  <h3 className="fw-bold mb-4">
                    Send Us a Message
                  </h3>

                  <Form>

                    <Row>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="Enter your name"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>

                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>

                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Enter subject"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>

                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Write your message"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Send Message
                    </Button>

                  </Form>

                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </section>

      <Footer />

    </div>
  );
}

export default Contact;

