import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Services() {
  return (
    <>
      <style>
        {`
          .services-page {
            background-color: #f3f8ff;
            padding: 60px 0;
          }

          .services-title {
            text-align: center;
            color: #10265c;
            font-weight: bold;
            font-size: 38px;
          }

          .services-subtitle {
            text-align: center;
            color: #66788f;
            margin-bottom: 45px;
          }

          .service-card {
            height: 100%;
            text-align: center;
            padding: 30px 20px;
            border: none;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          }

          .service-icon {
            font-size: 42px;
            margin-bottom: 15px;
          }

          .service-card h4 {
            color: #10265c;
            font-weight: bold;
          }

          .service-card p {
            color: #66788f;
            line-height: 1.6;
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

      {/* SERVICES */}

      <div className="services-page">

        <Container>

          <h1 className="services-title">
            Our Services
          </h1>

          <p className="services-subtitle">
            Learn, Practice, Enjoy and Grow with LTS
          </p>

          <div className="row g-4">

            {/* 1 */}

            <div className="col-md-4">
              <Card className="service-card">

                <div className="service-icon">
                  📚
                </div>

                <h4>
                  Regular Classes
                </h4>

                <p>
                  Regular Maths and Coding classes
                  with proper guidance and practice.
                </p>

              </Card>
            </div>


            {/* 2 */}

            <div className="col-md-4">
              <Card className="service-card">

                <div className="service-icon">
                  🎥
                </div>

                <h4>
                  Live Classes
                </h4>

                <p>
                  Interactive live classes where
                  students can learn and ask questions.
                </p>

              </Card>
            </div>


            {/* 3 */}

            <div className="col-md-4">
              <Card className="service-card">

                <div className="service-icon">
                  💬
                </div>

                <h4>
                  Doubt Sessions
                </h4>

                <p>
                  Special doubt sessions to clear
                  concepts and solve difficult questions.
                </p>

              </Card>
            </div>


            {/* 4 */}

            <div className="col-md-4">
              <Card className="service-card">

                <div className="service-icon">
                  💻
                </div>

                <h4>
                  Coding Practice
                </h4>

                <p>
                  Practical coding practice with
                  programming and web development.
                </p>

              </Card>
            </div>


            {/* 5 */}

            <div className="col-md-4">
              <Card className="service-card">

                <div className="service-icon">
                  🎉
                </div>

                <h4>
                  Fun & Learning Activities
                </h4>

                <p>
                  Fun activities, quizzes and
                  educational games to make learning enjoyable.
                </p>

              </Card>
            </div>


            {/* 6 */}

            <div className="col-md-4">
              <Card className="service-card">

                <div className="service-icon">
                  🏆
                </div>

                <h4>
                  Annual Events
                </h4>

                <p>
                  Annual celebrations, student activities
                  and special events at LTS.
                </p>

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

export default Services;