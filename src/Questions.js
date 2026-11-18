import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

function Questions() {
  return (
    <>
      <style>
        {`
          .faq-page {
            background-color: #f3f8ff;
            padding: 60px 0;
            min-height: 75vh;
          }

          .faq-title {
            text-align: center;
            color: #10265c;
            font-size: 38px;
            font-weight: bold;
          }

          .faq-subtitle {
            text-align: center;
            color: #66788f;
            margin-bottom: 40px;
          }

          .faq-box {
            max-width: 850px;
            margin: auto;
          }

          .accordion-item {
            margin-bottom: 15px;
            border: none !important;
            border-radius: 10px !important;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          }

          .accordion-button {
            color: #10265c;
            font-weight: bold;
            background-color: white;
          }

          .accordion-button:not(.collapsed) {
            color: #0d6efd;
            background-color: #eef6ff;
            box-shadow: none;
          }

          .accordion-body {
            color: #66788f;
            line-height: 1.7;
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

      {/* FAQ PAGE */}

      <div className="faq-page">

        <Container>

          <h1 className="faq-title">
            Frequently Asked Questions
          </h1>

          <p className="faq-subtitle">
            Find answers to common questions about LTS
          </p>

          <div className="faq-box">

            <Accordion>

              {/* QUESTION 1 */}

              <Accordion.Item eventKey="0">

                <Accordion.Header>
                  What courses does LTS offer?
                </Accordion.Header>

                <Accordion.Body>
                  LTS offers Maths classes for students
                  from Class 9th to 12th and college students.
                  We also provide Coding classes for college students.
                </Accordion.Body>

              </Accordion.Item>


              {/* QUESTION 2 */}

              <Accordion.Item eventKey="1">

                <Accordion.Header>
                  Are online classes available?
                </Accordion.Header>

                <Accordion.Body>
                  Yes, LTS provides both online and offline
                  learning options according to the students'
                  requirements.
                </Accordion.Body>

              </Accordion.Item>


              {/* QUESTION 3 */}

              <Accordion.Item eventKey="2">

                <Accordion.Header>
                  Are doubt sessions provided?
                </Accordion.Header>

                <Accordion.Body>
                  Yes, regular doubt sessions are provided
                  to help students understand difficult topics
                  and clear their concepts.
                </Accordion.Body>

              </Accordion.Item>


              {/* QUESTION 4 */}

              <Accordion.Item eventKey="3">

                <Accordion.Header>
                  Is Coding suitable for beginners?
                </Accordion.Header>

                <Accordion.Body>
                  Yes. Coding is taught step by step,
                  starting from basic concepts and gradually
                  moving towards practical programming.
                </Accordion.Body>

              </Accordion.Item>


              {/* QUESTION 5 */}

              <Accordion.Item eventKey="4">

                <Accordion.Header>
                  How can I join LTS?
                </Accordion.Header>

                <Accordion.Body>
                  You can contact LTS through the Contact
                  page or register using the registration form
                  available on the website.
                </Accordion.Body>

              </Accordion.Item>

            </Accordion>

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

export default Questions;