
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function About1() {
  return (
    <section className="py-5">
      <Container>

        <div className="text-center mb-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted">
            Empowering students with practical technology skills.
          </p>
        </div>

        <Row className="align-items-center mb-5">

          <Col md={6}>
            <h2 className="fw-bold mb-3">
              Welcome to Softech
            </h2>

            <p>
              Softech is a technology learning platform created to help
              students understand programming and modern web technologies
              in a simple and practical way.
            </p>

            <p>
              We focus on learning through examples, projects and
              hands-on practice so that students can confidently use
              their technical knowledge in real-world situations.
            </p>

            <Button variant="primary">
              Explore Courses
            </Button>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="skills.jpg"
              alt="Students learning technology"
              className="img-fluid rounded shadow"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover"
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "skills.jpg";
              }}
            />
          </Col>

        </Row>

        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <h3 className="fw-bold">Our Mission</h3>
                <p className="text-muted">
                  Our mission is to make technology education easy,
                  accessible and practical for every learner. We want
                  students to build strong fundamentals and develop
                  problem-solving skills.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <h3 className="fw-bold">Our Vision</h3>
                <p className="text-muted">
                  Our vision is to create a community of confident
                  learners who can use their technical knowledge to
                  create useful websites, applications and digital
                  solutions.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mb-4">
          <h2 className="fw-bold">Why Choose Softech?</h2>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body className="p-4">
                <h4>Practical Learning</h4>
                <p className="text-muted">
                  Learn concepts by working on practical examples
                  and projects.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body className="p-4">
                <h4>Beginner Friendly</h4>
                <p className="text-muted">
                  Simple explanations make technical topics easier
                  to understand.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body className="p-4">
                <h4>Modern Skills</h4>
                <p className="text-muted">
                  Develop skills in modern web technologies and
                  programming tools.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default About1;
