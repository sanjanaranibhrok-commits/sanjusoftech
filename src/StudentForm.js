import React, { useEffect, useState } from "react";

function StudentForm({
  addStudent,
  editStudent,
  updateStudent,
  closeForm
}) {

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {

    if (editStudent) {
      setName(editStudent.name);
      setRoll(editStudent.roll);
      setCourse(editStudent.course);
      setAge(editStudent.age);
    }

  }, [editStudent]);

  function saveStudent(e) {

    e.preventDefault();

    const student = {
      name,
      roll,
      course,
      age
    };

    if (editStudent) {

      updateStudent({
        ...student,
        id: editStudent.id
      });

    } else {

      addStudent(student);

    }
  }

  const styles = `
    .form-box {
      background: white;
      max-width: 600px;
      padding: 25px;
      border-radius: 8px;
      margin-top: 20px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }

    .form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .form-header h3 {
      margin: 0;
    }

    .close-btn {
      border: none;
      background: transparent;
      font-size: 28px;
      color: #555;
      cursor: pointer;
      padding: 0;
    }

    .close-btn:hover {
      color: #e74c3c;
    }

    .form-box label {
      display: block;
      font-weight: bold;
      font-size: 14px;
      margin-top: 10px;
    }

    .form-box input {
      width: 100%;
      padding: 11px;
      margin: 8px 0 15px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 15px;
      outline: none;
    }

    .form-box input:focus {
      border-color: #3498db;
    }

    .save-btn {
      background: #27ae60;
      color: white;
      border: none;
      padding: 10px 22px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 15px;
      margin-top: 10px;
      margin-right: 10px;
    }

    .save-btn:hover {
      background: #219150;
    }

    .cancel-btn {
      background: #6366b5;
      color: white;
      border: none;
      padding: 10px 22px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 15px;
    }

    .cancel-btn:hover {
      background: #5052a0;
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="form-box">

        <div className="form-header">

          <h3>
            {editStudent ? "Edit Student" : "Add Student"}
          </h3>

          <button
            className="close-btn"
            onClick={closeForm}
          >
            ×
          </button>

        </div>

        <form onSubmit={saveStudent}>

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Roll No.</label>

          <input
            type="text"
            placeholder="Enter roll number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            required
          />

          <label>Course</label>

          <input
            type="text"
            placeholder="Enter course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />

          <label>Age</label>

          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <button
            type="submit"
            className="save-btn"
          >
            {editStudent ? "Update" : "Save"}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={closeForm}
          >
            Cancel
          </button>

        </form>

      </div>
    </>
  );
}

export default StudentForm;