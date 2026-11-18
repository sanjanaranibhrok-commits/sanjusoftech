import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Teachers from "./Teachers";
import Students from "./Students";
import Courses from "./Courses";
import StuLogin from "./StuLogin";

function App() {

  const styles = `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f6fa;
      color: #222;
    }

    button {
      font-family: Arial, sans-serif;
    }

    .main {
      display: flex;
      min-height: calc(100vh - 70px);
    }

    .content {
      flex: 1;
      padding: 30px;
      overflow-x: auto;
    }

    .page-box {
      width: 100%;
      background: white;
      padding: 25px;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      .main {
        flex-direction: column;
      }

      .content {
        padding: 15px;
      }
    }
  `;

  return (
    <BrowserRouter>

      <style>{styles}</style>

      <Header />

      <div className="main">

        <Sidebar />

        <div className="content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/teachers"
              element={<Teachers />}
            />

            <Route
              path="/students"
              element={<Students />}
            />

            <Route
              path="/courses"
              element={<Courses />}
            />

            <Route
              path="/login"
              element={<StuLogin />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;