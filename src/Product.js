import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Product() {
  return (
    <>
      <section id="courses" className="py-5">
        <Container>
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Courses</h2>
            <p className="text-muted">
              Choose the best course for your learning journey.
            </p>
          </div>

          {/* 4 Cards */}
          <Row className="g-4">
            {/* Card 1 */}
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/180/500/300"
                  alt="HTML CSS"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>HTML & CSS</Card.Title>
                  <Card.Text>
                    Learn HTML and CSS from beginner level and create beautiful
                    websites.
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/0/500/300"
                  alt="JavaScript"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text>
                    Learn JavaScript and understand modern web development.
                  </Card.Text>
                  <Button variant="success" className="mt-auto">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/48/500/300"
                  alt="React JS"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>React JS</Card.Title>
                  <Card.Text>
                    Build powerful and modern websites using React JS.
                  </Card.Text>
                  <Button variant="danger" className="mt-auto">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 4 */}
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/60/500/300"
                  alt="Bootstrap"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Bootstrap</Card.Title>
                  <Card.Text>
                    Create responsive websites quickly using Bootstrap components.
                  </Card.Text>
                  <Button variant="dark" className="mt-auto">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold">About Softech</h2>
              <p className="text-muted">
                Softech is a learning platform where students can learn programming
                and web development.
              </p>
              <p className="text-muted">
                Our goal is to make programming simple, practical and easy to
                understand.
              </p>
              <Button variant="primary">Know More</Button>
            </Col>

            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://picsum.photos/id/2/600/400"
                alt="About Softech"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Frequently Asked Questions</h2>
            <p className="text-muted">Find answers to common questions.</p>
          </div>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Softech?</Accordion.Header>
              <Accordion.Body>
                Softech is a learning platform where students can learn programming
                and web development.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Which courses are available?</Accordion.Header>
              <Accordion.Body>
                We provide courses like HTML & CSS, JavaScript, React JS and
                Bootstrap.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Is this suitable for beginners?</Accordion.Header>
              <Accordion.Body>
                Yes. Our courses are designed for beginners as well as students who
                want to improve their existing skills.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I start learning?</Accordion.Header>
              <Accordion.Body>
                Simply choose a course and click on the Learn More button to get
                started.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <Container>
          <div className="text-center">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted">
              Have any questions? Get in touch with us.
            </p>
            <Button variant="primary">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Product;