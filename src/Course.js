import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Course() {
  return (
    <>
      <style>
        {`
          .course-page {
            background-color: #f3f8ff;
            padding: 60px 0;
            min-height: 90vh;
          }

          .course-title {
            text-align: center;
            color: #10265c;
            font-size: 38px;
            font-weight: bold;
          }

          .course-subtitle {
            text-align: center;
            color: #66788f;
            margin-bottom: 45px;
          }

          .course-card {
            height: 100%;
            border: none;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.10);
          }

          .course-img {
            width: 100%;
            height: 190px;
            object-fit: cover;
          }

          .course-body {
            text-align: center;
            padding: 25px;
          }

          .course-body h3 {
            color: #10265c;
            font-weight: bold;
          }

          .course-body p {
            color: #66788f;
            min-height: 65px;
            line-height: 1.6;
          }

          .course-btn {
            border-radius: 25px;
            padding: 9px 22px;
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

          @media(max-width: 768px) {
            .course-title {
              font-size: 30px;
            }

            .course-page {
              padding: 40px 0;
            }
          }
        `}
      </style>

      {/* COURSES */}

      <div className="course-page">

        <Container>

          <h1 className="course-title">
            Our Courses
          </h1>

          <p className="course-subtitle">
            Choose the right course and start your journey with LTS
          </p>

          <div className="row g-4">

            {/* COURSE 1 */}

            <div className="col-md-6">
              <Card className="course-card">

                <img
                  src="https://images.unsplash.com/photo-1509228468518-180dd4864904"
                  className="course-img"
                  alt="Class 9 and 10 Maths"
                />

                <div className="course-body">

                  <h3>
                    Class 9th - 10th Maths
                  </h3>

                  <p>
                    Complete Maths preparation with
                    strong concepts, practice and
                    regular tests.
                  </p>

                  <Button
                    variant="primary"
                    className="course-btn"
                  >
                    Learn More →
                  </Button>

                </div>

              </Card>
            </div>


            {/* COURSE 2 */}

            <div className="col-md-6">
              <Card className="course-card">

                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
                  className="course-img"
                  alt="Class 11 and 12 Maths"
                />

                <div className="course-body">

                  <h3>
                    Class 11th - 12th Maths
                  </h3>

                  <p>
                    Board-focused Maths classes with
                    concept building and regular
                    question practice.
                  </p>

                  <Button
                    variant="primary"
                    className="course-btn"
                  >
                    Learn More →
                  </Button>

                </div>

              </Card>
            </div>


            {/* COURSE 3 */}

            <div className="col-md-6">
              <Card className="course-card">

                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
                  className="course-img"
                  alt="College Maths"
                />

                <div className="course-body">

                  <h3>
                    College Maths
                  </h3>

                  <p>
                    Easy-to-understand Maths classes
                    for college students with exam
                    preparation.
                  </p>

                  <Button
                    variant="primary"
                    className="course-btn"
                  >
                    Learn More →
                  </Button>

                </div>

              </Card>
            </div>


            {/* COURSE 4 */}

            <div className="col-md-6">
              <Card className="course-card">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  className="course-img"
                  alt="Coding Classes"
                />

                <div className="course-body">

                  <h3>
                    Coding Classes
                  </h3>

                  <p>
                    Learn programming, web development
                    and practical coding skills step by step.
                  </p>

                  <Button
                    variant="primary"
                    className="course-btn"
                  >
                    Learn More →
                  </Button>

                </div>

              </Card>
            </div>

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

export default Course;