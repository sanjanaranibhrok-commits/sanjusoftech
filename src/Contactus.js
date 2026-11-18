import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contactus() {
  return (
    <>
      <style>
        {`
          .contact-page {
            background-color: #f3f8ff;
            padding: 60px 0;
          }

          .contact-title {
            text-align: center;
            color: #10265c;
            font-size: 38px;
            font-weight: bold;
          }

          .contact-subtitle {
            text-align: center;
            color: #66788f;
            margin-bottom: 40px;
          }

          .contact-box {
            background-color: white;
            max-width: 700px;
            margin: auto;
            padding: 35px;
            border-radius: 18px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.10);
          }

          .form-label {
            color: #10265c;
            font-weight: 600;
          }

          .send-btn {
            width: 100%;
            border-radius: 25px;
            padding: 10px;
            margin-top: 10px;
          }

          .footer {
            background-color: #082f6b;
            color: white;
            text-align: center;
            padding: 30px 15px;
          }

          .footer h4 {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .footer p {
            margin: 6px;
            font-size: 14px;
          }
        `}
      </style>

      {/* CONTACT PAGE */}

      <div className="contact-page">

        <Container>

          <h1 className="contact-title">
            Contact Us
          </h1>

          <p className="contact-subtitle">
            Have a question? We would love to hear from you.
          </p>

          <div className="contact-box">

            <Form>

              <Form.Group className="mb-3">
                <Form.Label>
                  Your Name
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>
                  Email
                </Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>
                  Mobile Number
                </Form.Label>

                <Form.Control
                  type="tel"
                  placeholder="Enter mobile number"
                />
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>
                  Select Course
                </Form.Label>

                <Form.Select>
                  <option>Select Course</option>
                  <option>Class 9th - 10th Maths</option>
                  <option>Class 11th - 12th Maths</option>
                  <option>College Maths</option>
                  <option>Coding Classes</option>
                </Form.Select>
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>
                  Message
                </Form.Label>

                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message"
                />
              </Form.Group>


              <Button
                variant="primary"
                type="submit"
                className="send-btn"
              >
                Send Message
              </Button>

            </Form>

          </div>

        </Container>

      </div>


      {/* FOOTER */}

      <footer className="footer">

        <h4>
          LTS – Ladder To Success
        </h4>

        <p>
          Maths & Coding Coaching for Students
        </p>

        <p>
          Home | Courses | Faculty | Services | Contact
        </p>

        <p>
          © 2026 LTS. All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default Contactus;