import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";

function Coursees() {

  const courses = [
    {
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, React and Node.js to build modern websites.",
      duration: "6 Months",
      image: "web.jpg"
    },
    {
      title: "Python Programming",
      description: "Learn Python programming from basic to advanced level with practical examples.",
      duration: "3 Months",
      image: "python.jpg"
    },
    {
      title: "Java Programming",
      description: "Learn Java concepts, object-oriented programming and application development.",
      duration: "4 Months",
      image: "java.webp"
    },
    {
      title: "C & C++ Programming",
      description: "Understand programming fundamentals, logic building and problem solving.",
      duration: "3 Months",
      image: "ccpp.webp"
    },
    {
      title: "Data Science",
      description: "Learn data analysis, Python, data visualization and basic machine learning.",
      duration: "6 Months",
      image: "datascience.jpg"
    },
    {
      title: "Graphic Designing",
      description: "Learn graphic design basics, creative layouts and digital designing skills.",
      duration: "3 Months",
      image: "graphicdesigning.jpg"
    }
  ];

  return (
    <>
      <Container className="py-5">

        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Courses</h1>
          <p className="text-muted">
            Choose the right course and build your future with Softech.
          </p>
        </div>

        <Row className="g-4">

          {courses.map((course, index) => (

            <Col md={4} sm={6} xs={12} key={index}>

              <Card className="h-100 shadow-sm border-0">

                <Card.Img
                  variant="top"
                  src={course.image}
                  alt={course.title}
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                />

                <Card.Body className="d-flex flex-column">

                  <Card.Title className="fw-bold">
                    {course.title}
                  </Card.Title>

                  <Card.Text className="text-muted">
                    {course.description}
                  </Card.Text>

                  <p className="mb-3">
                    <strong>Duration:</strong> {course.duration}
                  </p>

                  <Button variant="primary" className="mt-auto">
                    Learn More
                  </Button>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

      <Footer />
    </>
  );
}

export default Coursees;
