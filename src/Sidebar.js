import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  const styles = `
    .sidebar {
      width: 220px;
      min-height: calc(100vh - 70px);
      background: #1f2937;
      padding: 20px 10px;
      flex-shrink: 0;
    }

    .sidebar a {
      display: block;
      color: white;
      text-decoration: none;
      padding: 12px 15px;
      margin-bottom: 8px;
      border-radius: 5px;
      cursor: pointer;
    }

    .sidebar a:hover {
      background: #374151;
      color: white;
    }

    .sidebar a.active {
      background: #374151;
      color: white;
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="sidebar">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/teachers">
          Teachers
        </Link>

        <Link to="/students">
          Students
        </Link>

        <Link to="/course-api">
          Courses
        </Link>

      </div>
    </>
  );
}

export default Sidebar;
