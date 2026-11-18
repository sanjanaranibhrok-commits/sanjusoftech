import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Abt() {
  return (
    <>
      <style>
        {`
          .about-page {
            background-color: #f3f8ff;
            padding: 60px 0;
          }

          .about-title {
            text-align: center;
            color: #10265c;
            font-size: 38px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .about-subtitle {
            text-align: center;
            color: #66788f;
            margin-bottom: 45px;
          }

          .about-box {
            background: white;
            padding: 35px;
            border-radius: 18px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.10);
          }

          .about-img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            border-radius: 15px;
          }

          .about-text {
            padding: 15px 25px;
          }

          .about-text h2 {
            color: #10265c;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .about-text p {
            color: #66788f;
            line-height: 1.7;
          }

          .about-feature {
            background-color: #f1f7ff;
            padding: 15px;
            margin-top: 15px;
            border-radius: 10px;
            color: #10265c;
            font-weight: 600;
          }

          .about-btn {
            margin-top: 20px;
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

      {/* ABOUT PAGE */}

      <div className="about-page">

        <Container>

          <h1 className="about-title">
            About LTS
          </h1>

          <p className="about-subtitle">
            Ladder To Success – Learn Today, Succeed Tomorrow
          </p>

          <div className="about-box">

            <div className="row align-items-center">

              {/* IMAGE */}

              <div className="col-md-5">

                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  className="about-img"
                  alt="Students Learning"
                />

              </div>


              {/* TEXT */}

              <div className="col-md-7">

                <div className="about-text">

                  <h2>
                    Welcome to Ladder To Success
                  </h2>

                  <p>
                    LTS is a coaching institute focused on
                    providing quality education in Maths and
                    Coding.
                  </p>

                  <p>
                    We help school and college students build
                    strong concepts through simple teaching,
                    regular practice and personal guidance.
                  </p>

                  <div className="about-feature">
                    📚 Quality Education
                  </div>

                  <div className="about-feature">
                    🎓 Expert Guidance
                  </div>

                  <div className="about-feature">
                    💻 Practical Coding Learning
                  </div>

                  <Button
                    variant="primary"
                    className="about-btn"
                  >
                    Join LTS →
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

export default Abt;