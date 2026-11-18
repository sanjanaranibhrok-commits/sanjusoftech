import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginPage() {
  return (
    <>
      <style>
        {`
          .login-page {
            background-color: #f3f8ff;
            padding: 60px 0;
          }

          .form-box {
            background-color: white;
            max-width: 700px;
            margin: auto;
            padding: 35px;
            border-radius: 18px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.10);
          }

          .form-title {
            text-align: center;
            color: #10265c;
            font-weight: bold;
          }

          .form-subtitle {
            text-align: center;
            color: #66788f;
            margin-bottom: 30px;
          }

          .form-label {
            color: #10265c;
            font-weight: 600;
          }

          .register-btn {
            width: 100%;
            border-radius: 25px;
            padding: 10px;
            margin-top: 10px;
          }

          .whatsapp-btn {
            display: block;
            width: 100%;
            text-align: center;
            background-color: #25D366;
            color: white;
            text-decoration: none;
            padding: 11px;
            border-radius: 25px;
            margin-top: 15px;
            font-weight: bold;
          }

          .whatsapp-btn:hover {
            background-color: #1da851;
            color: white;
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

      <div className="login-page">
        <Container>

          <div className="form-box">

            <h2 className="form-title">
              Student Registration
            </h2>

            <p className="form-subtitle">
              Fill your information to join LTS
            </p>

            <Form>

              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter father's name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter mobile number"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Course</Form.Label>

                <Form.Select>
                  <option>Select Course</option>
                  <option>Maths - Class 9th</option>
                  <option>Maths - Class 10th</option>
                  <option>Maths - Class 11th</option>
                  <option>Maths - Class 12th</option>
                  <option>College Maths</option>
                  <option>Coding</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>

                <div>
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type="radio"
                  />

                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type="radio"
                  />

                  <Form.Check
                    inline
                    label="Other"
                    name="gender"
                    type="radio"
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Class Mode</Form.Label>

                <Form.Select>
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your address"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Create password"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="register-btn"
              >
                Register Now
              </Button>

              {/* Teacher WhatsApp Button */}

              <a
                href="https://wa.me/919416590813?text=Hi%2C%20I%20want%20to%20take%20admission%20in%20LTS.%20Please%20send%20me%20more%20details."
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                💬 Contact Teacher on WhatsApp
              </a>

            </Form>
          </div>

        </Container>
      </div>

      <footer className="footer">
        <h4>LTS – Ladder To Success</h4>

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

export default LoginPage;