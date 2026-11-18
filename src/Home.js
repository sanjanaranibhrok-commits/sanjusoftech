import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: Arial, sans-serif;
          }

          /* HERO */

          .hero {
            background: linear-gradient(100deg, #eef6ff, #dceeff);
            padding: 55px 0;
          }

          .hero-text {
            padding: 30px;
          }

          .small-title {
            color: #0d6efd;
            font-weight: bold;
            letter-spacing: 4px;
            font-size: 14px;
          }

          .hero h1 {
            color: #10265c;
            font-size: 52px;
            font-weight: bold;
            margin: 10px 0;
          }

          .hero h4 {
            color: #174a91;
            word-spacing: 8px;
          }

          .hero p {
            color: #31537c;
            font-size: 17px;
            line-height: 1.6;
          }

          .hero-img {
            width: 100%;
            height: 330px;
            object-fit: cover;
            border-radius: 10px;
          }

          .btn1 {
            border-radius: 25px;
            padding: 11px 25px;
            margin-right: 10px;
          }

          /* SECTION */

          .section {
            padding: 45px 0;
          }

          .title {
            text-align: center;
            color: #10265c;
            font-weight: bold;
            font-size: 30px;
          }

          .subtitle {
            text-align: center;
            color: #31537c;
            margin-bottom: 30px;
          }

          /* COURSE CARDS */

          .course-card {
            border: 1px solid #d7e5f5;
            border-radius: 10px;
            overflow: hidden;
            height: 100%;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          }

          .course-card img {
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
            font-size: 21px;
            font-weight: bold;
          }

          .course-body p {
            color: #536b87;
            min-height: 50px;
          }

          /* FEATURES */

          .features {
            background-color: #f1f8ff;
            padding: 45px 0;
          }

          .feature-card {
            background: white;
            border: none;
            border-radius: 10px;
            height: 100%;
            text-align: center;
            padding: 25px 15px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.07);
          }

          .feature-icon {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background: #0d6efd;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            font-size: 25px;
            margin-bottom: 15px;
          }

          .feature-card h4 {
            color: #10265c;
            font-size: 18px;
            font-weight: bold;
          }

          .feature-card p {
            color: #536b87;
            font-size: 14px;
          }

          /* TEACHER */

          .teacher {
            padding: 50px 0;
          }

          .teacher-img {
            width: 95%;
            height: 500px;
            object-fit: cover;
            border-radius: 10px;
          }

          .teacher-text {
            padding: 20px 35px;
          }

          .teacher-small {
            color: #0d6efd;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 2px;
          }

          .teacher-text h2 {
            color: #10265c;
            font-weight: bold;
          }

          .teacher-text p {
            color: #536b87;
            line-height: 1.7;
          }

          /* CTA */

          .cta {
            background: #0d4da8;
            color: white;
            padding: 25px 0;
          }

          .cta h3 {
            font-weight: bold;
          }

          .cta p {
            margin: 0;
          }

          /* FOOTER */

          .footer {
            background: #082f6b;
            color: white;
            text-align: center;
            padding: 25px;
          }

          .footer h4 {
            font-weight: bold;
          }

          .footer p {
            margin: 5px;
            font-size: 14px;
          }

          @media(max-width: 768px) {

            .hero {
              text-align: center;
            }

            .hero h1 {
              font-size: 38px;
            }

            .hero-img {
              margin-top: 20px;
            }

            .teacher-text {
              padding: 25px 5px;
            }
          }
        `}
      </style>


      {/* HERO SECTION */}

      <div className="hero">

        <Container>

          <div className="row align-items-center">

            <div className="col-md-6 hero-text">

              <div className="small-title">
                WELCOME TO LTS
              </div>

              <h1>
                Ladder To Success
              </h1>

              <h4>
                Your Goals • Our Guidance • Your Success
              </h4>

              <p>
                We provide quality coaching for Maths & Coding
                with expert guidance, modern teaching methods
                and personal attention to every student.
              </p>

              <Button variant="primary" className="btn1">
                Join Now →
              </Button>

              <Button variant="outline-primary" className="btn1">
                Explore Courses
              </Button>

            </div>


            <div className="col-md-6">

              <img
                className="hero-img"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Students"
              />

            </div>

          </div>

        </Container>

      </div>


      {/* COURSES */}

      <Container className="section">

        <h2 className="title">
          Our Courses
        </h2>

        <p className="subtitle">
          Choose your path. We'll help you reach your goals.
        </p>

        <div className="row g-4">


          {/* CARD 1 */}

          <div className="col-md-4">

            <Card className="course-card">

              <Card.Img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904"
                alt="Maths Classes"
              />

              <div className="course-body">

                <h3>Maths Classes</h3>

                <p>
                  Class 9th to 12th | Board &
                  Competitive Preparation
                </p>

                <Button variant="primary" className="btn1">
                  Learn More →
                </Button>

              </div>

            </Card>

          </div>


          {/* CARD 2 */}

          <div className="col-md-4">

            <Card className="course-card">

              <Card.Img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Coding Classes"
              />

              <div className="course-body">

                <h3>Coding Classes</h3>

                <p>
                  Learn Programming, Web Development
                  & More
                </p>

                <Button variant="primary" className="btn1">
                  Learn More →
                </Button>

              </div>

            </Card>

          </div>


          {/* CARD 3 */}

          <div className="col-md-4">

            <Card className="course-card">

              <Card.Img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
                alt="College Classes"
              />

              <div className="course-body">

                <h3>College Classes</h3>

                <p>
                  Maths & Coding Classes for
                  College Students
                </p>

                <Button variant="primary" className="btn1">
                  Learn More →
                </Button>

              </div>

            </Card>

          </div>

        </div>

      </Container>


      {/* WHY CHOOSE LTS */}

      <div className="features">

        <Container>

          <h2 className="title">
            Why Choose LTS?
          </h2>

          <p className="subtitle">
            Because your success matters to us!
          </p>

          <div className="row g-4">


            {/* FEATURE 1 */}

            <div className="col-md-3">

              <Card className="feature-card">

                <div className="feature-icon">
                  🎥
                </div>

                <h4>
                  Live Classes
                </h4>

                <p>
                  Interactive live classes with
                  best teaching techniques.
                </p>

              </Card>

            </div>


            {/* FEATURE 2 */}

            <div className="col-md-3">

              <Card className="feature-card">

                <div className="feature-icon">
                  💬
                </div>

                <h4>
                  Doubt Sessions
                </h4>

                <p>
                  Regular doubt sessions to
                  clear your concepts.
                </p>

              </Card>

            </div>


            {/* FEATURE 3 */}

            <div className="col-md-3">

              <Card className="feature-card">

                <div className="feature-icon">
                  🌐
                </div>

                <h4>
                  Online & Offline
                </h4>

                <p>
                  Flexibility to learn from
                  anywhere, anytime.
                </p>

              </Card>

            </div>


            {/* FEATURE 4 */}

            <div className="col-md-3">

              <Card className="feature-card">

                <div className="feature-icon">
                  🏆
                </div>

                <h4>
                  Result Oriented Learning
                </h4>

                <p>
                  Focused preparation for
                  better academic results.
                </p>

              </Card>

            </div>

          </div>

        </Container>

      </div>


      {/* TEACHER SECTION */}

      <Container className="teacher">

        <div className="row align-items-center">

          <div className="col-md-5">

            <img
              className="teacher-img"
              src="/vanita.png"
              alt="Our Teacher"
            />

          </div>


          <div className="col-md-7 teacher-text">

            <div className="teacher-small">
              MEET OUR TEACHER
            </div>

            <h2>
              Your Guide to Success
            </h2>

            <p>
              Our teacher is dedicated to helping every
              student achieve their goals through clear
              concepts, regular practice and personal
              attention.
            </p>

            <div className="row">

              <div className="col-4">
                🎓 <b>Experienced</b>
              </div>

              <div className="col-4">
                ⭐ <b>Concept Focused</b>
              </div>

              <div className="col-4">
                👥 <b>Personal Attention</b>
              </div>

            </div>

          </div>

        </div>

      </Container>


      {/* CTA */}

      <div className="cta">

        <Container>

          <div className="row align-items-center">

            <div className="col-md-8">

              <h3>
                Start Your Journey With LTS
              </h3>

              <p>
                Learn • Practice • Improve • Succeed
              </p>

            </div>

            <div className="col-md-4 text-md-end">

              <Button variant="light" className="btn1">
                Join Now →
              </Button>

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

export default Home;