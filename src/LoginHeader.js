import React from "react";

function LoginHeader() {

  const styles = `
    .login-header {
      width: 100%;
      padding: 20px 30px;
      background: #2c3e50;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .login-header h2 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }

    .login-header span {
      font-size: 16px;
    }

    @media (max-width: 600px) {
      .login-header {
        padding: 15px 20px;
      }

      .login-header h2 {
        font-size: 20px;
      }

      .login-header span {
        font-size: 14px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="login-header">
        <h2>SOFTECH</h2>
        <span>Login Portal</span>
      </div>
    </>
  );
}

export default LoginHeader;