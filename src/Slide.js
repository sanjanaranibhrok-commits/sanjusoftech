import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";

function Slide(){
  return (
    <Carousel id="home">

      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1/1600/600"
          alt="First Slide"
        />

        <Carousel.Caption>
          <h1 className="fw-bold text-dark">
            Welcome to Softech
          </h1>

          <p className="text-dark">
            Learn programming and build your future.
          </p>

          <Button variant="primary">
            Get Started
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/20/1600/600"
          alt="Second Slide"
        />

        <Carousel.Caption>
          <h1 className="fw-bold text-dark">
            Learn Web Development
          </h1>

          <p className="text-dark">
            HTML, CSS, JavaScript and React JS.
          </p>

          <Button variant="success">
            Explore Courses
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/3/1600/600"
          alt="Third Slide"
        />

        <Carousel.Caption>
          <h1 className="fw-bold text-dark">
            Become a Developer
          </h1>

          <p className="text-dark">
            Start your coding journey today.
          </p>

          <Button variant="warning">
            Start Learning
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slide;