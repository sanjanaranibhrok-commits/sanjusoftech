import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";

function FAQ() {
  return (
    <div>

      <section id="faq" className="py-5 bg-light">
        <Container>

          {/* Heading */}
          <Row className="justify-content-center">
            <Col lg={8}>

              <div className="text-center mb-5">
                <h1 className="fw-bold">
                  Frequently Asked Questions
                </h1>

                <p className="text-muted">
                  Everything you need to know about Softech courses and learning.
                </p>
              </div>

              {/* FAQ */}
              <Accordion flush>

                <Accordion.Item
                  eventKey="0"
                  className="mb-3 border rounded"
                >
                  <Accordion.Header>
                    What is Softech?
                  </Accordion.Header>

                  <Accordion.Body>
                    Softech is an online learning platform that helps students
                    develop programming, web development and technology skills
                    through simple and practical learning.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="1"
                  className="mb-3 border rounded"
                >
                  <Accordion.Header>
                    What courses does Softech offer?
                  </Accordion.Header>

                  <Accordion.Body>
                    Softech offers courses in Web Development, Python,
                    Java, React, Database & SQL and UI/UX Design.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="2"
                  className="mb-3 border rounded"
                >
                  <Accordion.Header>
                    Are the courses suitable for beginners?
                  </Accordion.Header>

                  <Accordion.Body>
                    Yes. Our courses are designed with simple explanations
                    and practical examples, making them suitable for beginners.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="3"
                  className="mb-3 border rounded"
                >
                  <Accordion.Header>
                    How long does a course take to complete?
                  </Accordion.Header>

                  <Accordion.Body>
                    Course duration depends on the selected course. Most
                    courses can be completed within one to three months.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="4"
                  className="mb-3 border rounded"
                >
                  <Accordion.Header>
                    Do I need previous programming knowledge?
                  </Accordion.Header>

                  <Accordion.Body>
                    No. Beginners can start with basic courses and gradually
                    move towards advanced programming and development topics.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="5"
                  className="border rounded"
                >
                  <Accordion.Header>
                    How can I contact Softech?
                  </Accordion.Header>

                  <Accordion.Body>
                    You can contact Softech through the Contact section of
                    the website for questions, course information and other
                    enquiries.
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>

            </Col>
          </Row>

        </Container>
      </section>

      <Footer />

    </div>
  );
}

export default FAQ;

