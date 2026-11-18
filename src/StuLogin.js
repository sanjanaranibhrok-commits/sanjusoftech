import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";

function StuLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = () => {

    const correctEmail = "sanju@gmail.com";
    const correctPassword = "sanju123";

    if (email !== correctEmail && password !== correctPassword) {
      setMessage("Email and Password do not match");
    }

    else if (email !== correctEmail) {
      setMessage("Email does not match");
    }

    else if (password !== correctPassword) {
      setMessage("Password does not match");
    }

    else {
      setMessage("Login Successful");
      navigate("/");
    }
  };

  const styles = `
    .stu-login {
      width: 400px;
      max-width: 90%;
      margin: 50px auto;
      padding: 35px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      text-align: center;
    }

    .stu-login h1 {
      margin-bottom: 5px;
      color: #2c3e50;
    }

    .stu-login h2 {
      margin-bottom: 5px;
      color: #444;
    }

    .stu-login p {
      color: #777;
      margin-bottom: 20px;
    }

    .stu-login input {
      width: 100%;
      padding: 12px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
      font-size: 15px;
    }

    .stu-login input:focus {
      border-color: #4f46e5;
    }

    .stu-login-btn {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 5px;
      background: #4f46e5;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    .stu-login-btn:hover {
      background: #3730a3;
    }

    .login-message {
      margin-top: 15px;
      color: #dc2626 !important;
      font-weight: bold;
    }

    @media (max-width: 500px) {
      .stu-login {
        margin: 30px auto;
        padding: 25px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <LoginHeader />

      <div className="stu-login">

        <h1>Welcome</h1>

        <h2>Student Login</h2>

        <p>Sign in to continue</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="stu-login-btn"
          onClick={login}
        >
          Login
        </button>

        {message && (
          <p className="login-message">
            {message}
          </p>
        )}

      </div>
    </>
  );
}

export default StuLogin;