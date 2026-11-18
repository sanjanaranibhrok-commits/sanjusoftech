
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Teacher() {

  const API = "http://localhost:3001";

  const [teachers, setTeachers] = useState([]);

  const [teacherId, setTeacherId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");

  const [oldName, setOldName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // GET TEACHER DATA
  const getdata = async () => {
    try {
      const response = await fetch(`${API}/getteacher`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to fetch data");
      }

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
      else if (Array.isArray(result.teachers)) {
        data = result.teachers;
      }

      setTeachers(data);

    } catch (error) {
      console.log("Get Teacher Error:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // CLEAR FORM
  const clearForm = () => {
    setTeacherId("");
    setName("");
    setAge("");
    setSubject("");
    setOldName("");
    setEditMode(false);
    setShowForm(false);
  };

  // EDIT TEACHER
  const handleEdit = (teacher) => {
    setTeacherId(teacher.teacherId || "");
    setName(teacher.name || "");
    setAge(teacher.age || "");
    setSubject(teacher.subject || "");

    setOldName(teacher.name || "");

    setEditMode(true);
    setShowForm(true);
  };

  // ADD AND UPDATE TEACHER
  const handleSave = async (e) => {
    e.preventDefault();

    const teacherData = {
      teacherId: Number(teacherId),
      name: name,
      age: Number(age),
      subject: subject
    };

    try {
      setLoading(true);

      let response;

      if (editMode) {
        response = await fetch(
          `${API}/updateteacher?name=${encodeURIComponent(oldName)}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(teacherData)
          }
        );

      } else {
        response = await fetch(`${API}/insertteacher`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(teacherData)
        });
      }

      const result = await response.json();

      if (!response.ok || result.status >= 400) {
        throw new Error(result.message || "Save failed");
      }

      alert(
        editMode
          ? "Teacher updated successfully!"
          : "Teacher added successfully!"
      );

      clearForm();
      await getdata();

    } catch (error) {
      console.log("Save Error:", error);
      alert(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // DELETE TEACHER
  const handleDelete = async (teacher) => {

    const teacherName = teacher.name;

    if (!window.confirm("Are you sure you want to delete this teacher?")) {
      return;
    }

    try {
      const response = await fetch(
        `${API}/deleteteacher/${encodeURIComponent(teacherName)}`,
        {
          method: "DELETE"
        }
      );

      const result = await response.json();

      if (!response.ok || result.status >= 400) {
        throw new Error(result.message || "Delete failed");
      }

      alert("Teacher deleted successfully!");

      await getdata();

    } catch (error) {
      console.log("Delete Error:", error);
      alert(error.message || "Delete failed!");
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Teacher Management
      </h2>

      <Button
        variant="success"
        className="mb-3"
        onClick={() => {
          clearForm();
          setShowForm(true);
        }}
      >
        Add Teacher
      </Button>

      {/* ADD / EDIT FORM */}

      {showForm && (

        <div className="card p-4 mb-4 shadow-sm">

          <h4 className="mb-3">
            {editMode ? "Edit Teacher" : "Add Teacher"}
          </h4>

          <Form onSubmit={handleSave}>

            <Form.Group className="mb-3">
              <Form.Label>Teacher ID</Form.Label>
              <Form.Control
                type="number"
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teacher Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              variant="success"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : editMode
                  ? "Update Teacher"
                  : "Save Teacher"
              }
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

      {/* TEACHER TABLE */}

      <h4 className="mb-3">
        Teacher List
      </h4>

      <Table striped bordered hover responsive>

        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Teacher ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {teachers.length > 0 ? (

            teachers.map((teacher, index) => (

              <tr key={teacher._id || teacher.teacherId || index}>

                <td>{index + 1}</td>
                <td>{teacher.teacherId}</td>
                <td>{teacher.name}</td>
                <td>{teacher.age}</td>
                <td>{teacher.subject}</td>

                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(teacher)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => handleDelete(teacher)}
                  >
                    Delete
                  </Button>
                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="6" className="text-center">
                No Teacher Data Found
              </td>
            </tr>

          )}

        </tbody>

      </Table>

    </div>
  );
}

export default Teacher;
