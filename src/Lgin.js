import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Lgin() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (mobile === "" || password === "") {
      alert("Please enter mobile number and password");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    
    localStorage.setItem("userMobile", mobile);

    // Add pending product to cart after login
    const pendingProduct = localStorage.getItem("pendingProduct");

    if (pendingProduct) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(JSON.parse(pendingProduct));

      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.removeItem("pendingProduct");
    }

    alert("Login Successful");
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .login-page {
            min-height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f5f5f5;
            padding: 30px;
          }

          .login-box {
            width: 400px;
            max-width: 100%;
            background: white;
            padding: 35px;
            border-radius: 20px;
            box-sizing: border-box;
          }

          .login-box h1 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 30px;
            color: #111;
          }

          .login-group {
            margin-bottom: 22px;
          }

          .login-group label {
            display: block;
            font-size: 17px;
            margin-bottom: 10px;
            color: #222;
          }

          .login-group input {
            width: 100%;
            padding: 12px 15px;
            font-size: 16px;
            border: 2px solid #b7a1a1;
            border-radius: 8px;
            outline: none;
            box-sizing: border-box;
          }

          .login-group input:focus {
            border-color: green;
            box-shadow: 0 0 5px rgba(15, 234, 99, 0.75);
          }

          .login-button {
            width: 100%;
            padding: 13px;
            border: none;
            border-radius: 8px;
            background: #0fea58;
            color: white;
            font-size: 17px;
            cursor: pointer;
          }

          .login-button:hover {
            background: #3fc908;
          }

          @media (max-width: 600px) {
            .login-page {
              padding: 20px;
            }

            .login-box {
              padding: 25px;
            }

            .login-box h1 {
              font-size: 26px;
            }
          }
        `}
      </style>

      <div className="login-page">
        <div className="login-box">
          <h1>Login</h1>

          <form onSubmit={handleLogin} autoComplete="off">
            <div className="login-group">
              <label>Mobile Number</label>

              <input
                type="tel"
                name="mobile-number"
                placeholder="Enter mobile number"
                value={mobile}
                maxLength="10"
                autoComplete="off"
                required
                onChange={(e) => {
                  const value = e.target.value;

                  if (/^[0-9]*$/.test(value)) {
                    setMobile(value);
                  }
                }}
              />
            </div>

            <div className="login-group">
              <label>Password</label>

              <input
                type="password"
                name="login-password"
                placeholder="Enter password"
                value={password}
                autoComplete="new-password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Lgin;

