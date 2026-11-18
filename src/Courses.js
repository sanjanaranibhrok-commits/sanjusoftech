
import { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Courses() {

  const API = "http://localhost:3001";

  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const [oldName, setOldName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // GET COURSE DATA
  const getdata = async () => {

    try {

      const response = await fetch(`${API}/getcourse`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to fetch courses");
      }

      let data = [];

      if (Array.isArray(result)) {
        data = result;
      } else if (Array.isArray(result.data)) {
        data = result.data;
      } else if (Array.isArray(result.message)) {
        data = result.message;
      }

      setCourses(data);

    } catch (error) {

      console.log("Get Course Error:", error);

    }

  };

  useEffect(() => {
    getdata();
  }, []);

  // COURSE NAME
  const getCourseName = (course) => {
    return course.name || course.coursename || course.courseName || "";
  };

  // CLEAR FORM
  const clearForm = () => {

    setName("");
    setDuration("");
    setOldName("");
    setEditMode(false);
    setShowForm(false);

  };

  // EDIT COURSE
  const handleEdit = (course) => {

    setName(getCourseName(course));
    setDuration(course.duration || "");
    setOldName(getCourseName(course));

    setEditMode(true);
    setShowForm(true);

  };

  // ADD AND UPDATE
  const handleSave = async (e) => {

    e.preventDefault();

    const courseData = {
      name,
      duration
    };

    try {

      setLoading(true);

      let response;

      if (editMode) {

        response = await fetch(
          `${API}/updatecourse?name=${encodeURIComponent(oldName)}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(courseData)
          }
        );

      } else {

        response = await fetch(`${API}/insertcourse`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(courseData)
        });

      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Operation failed");
      }

      alert(
        editMode
          ? "Course Updated Successfully!"
          : "Course Added Successfully!"
      );

      clearForm();

      await getdata();

    } catch (error) {

      console.log(error);
      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  // DELETE COURSE
  const handleDelete = async (course) => {

    const courseName = getCourseName(course);

    if (!courseName) {
      alert("Course name not found");
      return;
    }

    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    try {

      const response = await fetch(
        `${API}/deletecourse/${encodeURIComponent(courseName)}`,
        {
          method: "DELETE"
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Delete failed");
      }

      alert("Course Deleted Successfully!");

      await getdata();

    } catch (error) {

      console.log(error);
      alert(error.message);

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Course Management
      </h2>

      <Button
        variant="success"
        className="mb-3"
        onClick={() => {
          clearForm();
          setShowForm(true);
        }}
      >
        Add Course
      </Button>

      {/* COURSE FORM */}

      {showForm && (

        <div className="card p-4 mb-4">

          <h4 className="mb-3">
            {editMode ? "Edit Course" : "Add Course"}
          </h4>

          <Form onSubmit={handleSave}>

            <div className="row">

              <div className="col-md-6 mb-3">

                <Form.Label>Course Name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter Course Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <Form.Label>Duration</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Example: 3 Years"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />

              </div>

            </div>

            <Button
              type="submit"
              variant="success"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : editMode
                  ? "Update Course"
                  : "Save Course"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="ms-2"
              onClick={clearForm}
            >
              Cancel
            </Button>

          </Form>

        </div>

      )}

      {/* COURSE TABLE */}

      <h4 className="mb-3">
        Course List
      </h4>

      <Table striped bordered hover responsive>

        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {courses.length > 0 ? (

            courses.map((course, index) => (

              <tr key={course._id || index}>

                <td>{index + 1}</td>

                <td>{getCourseName(course)}</td>

                <td>{course.duration || "Not Available"}</td>

                <td>

                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(course)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => handleDelete(course)}
                  >
                    Delete
                  </Button>

                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="4" className="text-center">
                No Course Data Found
              </td>
            </tr>

          )}

        </tbody>

      </Table>

    </div>

  );

}

export default Courses;
