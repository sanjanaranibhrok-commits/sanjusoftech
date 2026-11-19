import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

import Dashboard from "./Dashboard";//new dashboard
import Teachers from "./Teachers";
import Students from "./Students";
import Courses from "./Courses";
import StuLogin from "./StuLogin";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Coursees from "./Coursees";

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
      cursor: pointer;
    }

    .main {
      display: flex;
      min-height: calc(100vh - 70px);
    }

    .content {
      flex: 1;
      min-width: 0;
      padding: 30px;
      overflow-x: auto;
    }

    .sidebar {
      width: 230px;
      min-width: 230px;
      background: #2c3e50;
      min-height: calc(100vh - 70px);
      padding: 20px 10px;
    }

    .sidebar a {
      display: block;
      color: white;
      text-decoration: none;
      padding: 13px 15px;
      margin-bottom: 5px;
      border-radius: 5px;
    }

    .sidebar a:hover {
      background: #3498db;
      color: white;
    }

    .sidebar a.active {
      background: #3498db;
      color: white;
    }

    @media (max-width: 768px) {
      .main {
        flex-direction: column;
      }

      .sidebar {
        width: 100%;
        min-width: 100%;
        min-height: auto;
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

            <Route path="/" element={<Dashboard />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/teachers" element={<Teachers />} />

            <Route path="/students" element={<Students />} />

            <Route path="/courses" element={<Coursees />} />

            <Route path="/about" element={<About />} />

            <Route path="/faq" element={<FAQ />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<StuLogin />} />

            <Route path="/course-api" element={<Courses />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
