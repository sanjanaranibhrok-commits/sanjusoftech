import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const correctEmail = "sanju@gmail.com";
    const correctPassword = "12345";

    if (email === correctEmail && password === correctPassword) {
      navigate("/students");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <section className="py-5 bg-light">

      <Container>

        <div className="d-flex justify-content-center">

          <Card
            className="shadow p-4"
            style={{ width: "400px" }}
          >

            <h2 className="text-center fw-bold mb-4">
              Login
            </h2>

            <Form onSubmit={login}>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
              >
                Login
              </Button>

            </Form>

          </Card>

        </div>

      </Container>

    </section>
  );
}

export default Login;