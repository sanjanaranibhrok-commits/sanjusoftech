import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";

import Homepage from "./Homepage";
import Courses from "./Courses";
import About1 from "./About1";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Login from "./Login";

import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Teachers from "./Teachers";
import Students from "./Students";

function App() {

  const styles = `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f6fa;
    }

    .dashboard-main {
      display: flex;
      min-height: 100vh;
    }

    .dashboard-content {
      flex: 1;
      padding: 30px;
      overflow-x: auto;
    }

    @media (max-width: 768px) {
      .dashboard-main {
        flex-direction: column;
      }

      .dashboard-content {
        padding: 15px;
      }
    }
  `;

  return (
    <BrowserRouter>

      <style>{styles}</style>

      <Routes>

        {/* ================= WEBSITE ================= */}

        <Route
          path="/"
          element={
            <>
              <Header />
              <Homepage />
            </>
          }
        />

        <Route
          path="/courses"
          element={
            <>
              <Header />
              <Courses />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Header />
              <About1 />
            </>
          }
        />

        <Route
          path="/faq"
          element={
            <>
              <Header />
              <FAQ />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />


        {/* ================= DASHBOARD ================= */}

        <Route
          path="/students"
          element={
            <div className="dashboard-main">

              <Sidebar />

              <div className="dashboard-content">
                <Students />
              </div>

            </div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <div className="dashboard-main">

              <Sidebar />

              <div className="dashboard-content">
                <Dashboard />
              </div>

            </div>
          }
        />

        <Route
          path="/teachers"
          element={
            <div className="dashboard-main">

              <Sidebar />

              <div className="dashboard-content">
                <Teachers />
              </div>

            </div>
          }
        />

        <Route
          path="/dashboard-courses"
          element={
            <div className="dashboard-main">

              <Sidebar />

              <div className="dashboard-content">
                <Courses />
              </div>

            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;