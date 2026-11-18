import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Faculty() {
  return (
    <>
      <style>
        {`
          .faculty-page {
            background-color: #f3f8ff;
            padding: 60px 0;
          }

          .faculty-title {
            text-align: center;
            color: #10265c;
            font-size: 38px;
            font-weight: bold;
          }

          .faculty-subtitle {
            text-align: center;
            color: #66788f;
            margin-bottom: 45px;
          }

          .teacher-box {
            background: white;
            border-radius: 18px;
            padding: 35px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.10);
          }

          .teacher-img {
            width: 100%;
            height: 380px;
            object-fit: cover;
            object-position: top;
            border-radius: 15px;
          }

          .teacher-info {
            padding: 20px 30px;
          }

          .teacher-label {
            color: #0d6efd;
            font-weight: bold;
            letter-spacing: 2px;
            font-size: 14px;
          }

          .teacher-info h2 {
            color: #10265c;
            font-weight: bold;
            margin-top: 10px;
          }

          .teacher-info h5 {
            color: #0d6efd;
            margin-bottom: 20px;
          }

          .teacher-info p {
            color: #536b87;
            line-height: 1.7;
          }

          .feature {
            background-color: #f1f7ff;
            padding: 15px;
            border-radius: 10px;
            margin-top: 20px;
            color: #10265c;
            font-weight: 600;
            text-align: center;
          }

          .contact-btn {
            margin-top: 25px;
            border-radius: 25px;
            padding: 10px 25px;
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

      {/* FACULTY */}

      <div className="faculty-page">

        <Container>

          <h1 className="faculty-title">
            Our Faculty
          </h1>

          <p className="faculty-subtitle">
            Learn from experienced and dedicated teachers
          </p>

          <div className="teacher-box">

            <div className="row align-items-center">

              {/* TEACHER IMAGE */}

              <div className="col-md-5">

                <img
                  src="/vanita.png"
                  className="teacher-img"
                  alt="LTS Teacher"
                />

              </div>


              {/* TEACHER DETAILS */}

              <div className="col-md-7">

                <div className="teacher-info">

                  <div className="teacher-label">
                    LTS – LADDER TO SUCCESS
                  </div>

                  <h2>
                    Our Expert Teacher
                  </h2>

                  <h5>
                    Maths & Coding Faculty
                  </h5>

                  <p>
                    At LTS, our teacher focuses on building
                    strong concepts and making learning simple
                    and interesting for every student.
                  </p>

                  <p>
                    Students receive proper guidance, regular
                    practice and personal attention to help
                    them achieve their academic goals.
                  </p>

                  <div className="row">

                    <div className="col-md-4">
                      <div className="feature">
                        🎓 Expert Guidance
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="feature">
                        📚 Strong Concepts
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="feature">
                        👥 Personal Attention
                      </div>
                    </div>

                  </div>

                  <Button
                    variant="primary"
                    className="contact-btn"
                  >
                    Contact Us →
                  </Button>

                </div>

              </div>

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

export default Faculty;