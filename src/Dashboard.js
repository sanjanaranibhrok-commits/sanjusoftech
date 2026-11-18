import React, { useEffect, useState } from "react";

function Dashboard() {

  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);

  // STUDENTS API
  const getStudents = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/getstudent"
      );

      const result = await response.json();

      console.log("Student API Response:", result);

      let data = [];

      if (Array.isArray(result)) {
        data = result;
      }
      else if (Array.isArray(result.message)) {
        data = result.message;
      }
      else if (Array.isArray(result.data)) {
        data = result.data;
      }

      setTotalStudents(data.length);

    } catch (error) {
      console.log("Student API Error:", error);
    }
  };


  // TEACHERS API
  const getTeachers = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/getteacher"
      );

      const result = await response.json();

      let data = [];

      if (Array.isArray(result)) {
        data = result;
      }
      else if (Array.isArray(result.message)) {
        data = result.message;
      }
      else if (Array.isArray(result.data)) {
        data = result.data;
      }

      setTotalTeachers(data.length);

    } catch (error) {
      console.log("Teacher API Error:", error);
    }
  };


  // COURSES API
  const getCourses = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/getcourse"
      );

      const result = await response.json();

      let data = [];

      if (Array.isArray(result)) {
        data = result;
      }
      else if (Array.isArray(result.message)) {
        data = result.message;
      }
      else if (Array.isArray(result.data)) {
        data = result.data;
      }

      setTotalCourses(data.length);

    } catch (error) {
      console.log("Course API Error:", error);
    }
  };


  // AUTOMATIC API UPDATE
  useEffect(() => {

    getStudents();
    getTeachers();
    getCourses();

    const interval = setInterval(() => {
      getStudents();
      getTeachers();
      getCourses();
    }, 10000);

    return () => clearInterval(interval);

  }, []);


  const styles = `
    .dashboard-page {
      width: 100%;
      min-height: 100vh;
      padding: 30px;
      background: #f5f7fb;
      font-family: Arial, sans-serif;
    }

    .welcome-box {
      background: white;
      padding: 25px;
      border-radius: 12px;
      margin-bottom: 25px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.08);
    }

    .welcome-box h1 {
      margin: 0;
      color: #1f2937;
      font-size: 28px;
    }

    .welcome-box p {
      margin-top: 8px;
      color: #6b7280;
      font-size: 15px;
    }

    .dashboard-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }

    .dashboard-card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.08);
      transition: 0.3s;
    }

    .dashboard-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.12);
    }

    .card-icon {
      font-size: 30px;
      margin-bottom: 10px;
    }

    .dashboard-card h2 {
      margin: 0;
      font-size: 30px;
      color: #1f2937;
    }

    .dashboard-card p {
      margin: 8px 0 0;
      color: #6b7280;
      font-size: 15px;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }

    .performance-box {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.08);
    }

    .performance-box h3,
    .students-box h3 {
      margin-top: 0;
      color: #1f2937;
    }

    .bars {
      height: 220px;
      display: flex;
      align-items: end;
      justify-content: space-around;
      padding-top: 20px;
    }

    .bar-item {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      gap: 8px;
    }

    .bar {
      width: 45px;
      background: #4f46e5;
      border-radius: 6px 6px 0 0;
    }

    .bar-item span {
      font-size: 13px;
      color: #6b7280;
    }

    .students-box {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.08);
    }

    .student-info {
      color: #6b7280;
      font-size: 15px;
      margin-bottom: 12px;
    }

    .student-info b {
      color: #1f2937;
      font-size: 17px;
    }

    @media (max-width: 1000px) {
      .dashboard-cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .dashboard-page {
        padding: 15px;
      }

      .dashboard-cards {
        grid-template-columns: 1fr;
      }

      .welcome-box h1 {
        font-size: 22px;
      }

      .bar {
        width: 30px;
      }
    }
  `;


  return (
    <>
      <style>{styles}</style>

      <div className="dashboard-page">

        {/* WELCOME */}
        <div className="welcome-box">

          <h1>
            Welcome back, Sanjana 👋
          </h1>

          <p>
            Here's what's happening with your students today.
          </p>

        </div>


        {/* DASHBOARD CARDS */}
        <div className="dashboard-cards">

          {/* STUDENTS */}
          <div className="dashboard-card">

            <div className="card-icon">👨‍🎓</div>

            <h2>{totalStudents}</h2>

            <p>Total Students</p>

          </div>


          {/* TEACHERS */}
          <div className="dashboard-card">

            <div className="card-icon">👨‍🏫</div>

            <h2>{totalTeachers}</h2>

            <p>Total Teachers</p>

          </div>


          {/* COURSES */}
          <div className="dashboard-card">

            <div className="card-icon">📚</div>

            <h2>{totalCourses}</h2>

            <p>Total Courses</p>

          </div>


          {/* ACTIVE STUDENTS */}
          <div className="dashboard-card">

            <div className="card-icon">✅</div>

            <h2>{totalStudents}</h2>

            <p>Active Students</p>

          </div>

        </div>


        {/* STUDENT PERFORMANCE */}
        <div className="dashboard-grid">

          <div className="performance-box">

            <h3>
              Student Performance
            </h3>

            <div className="bars">

              <div className="bar-item">
                <div className="bar" style={{ height: "70px" }}></div>
                <span>Mon</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "100px" }}></div>
                <span>Tue</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "135px" }}></div>
                <span>Wed</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "110px" }}></div>
                <span>Thu</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "155px" }}></div>
                <span>Fri</span>
              </div>

            </div>

          </div>

        </div>


        {/* DASHBOARD SUMMARY */}
        <div className="students-box">

          <h3>
            Dashboard Summary
          </h3>

          <p className="student-info">
            Total students currently available in API:
            <b> {totalStudents}</b>
          </p>

          <p className="student-info">
            Total teachers currently available in API:
            <b> {totalTeachers}</b>
          </p>

          <p className="student-info">
            Total courses currently available in API:
            <b> {totalCourses}</b>
          </p>

        </div>

      </div>
    </>
  );
}

export default Dashboard;
