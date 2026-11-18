
import React, { useEffect, useState } from "react";

function Students() {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [course, setCourse] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [editStudentName, setEditStudentName] = useState(null);

    // GET API
    useEffect(() => {
        getdata();
    }, []);

    async function getdata() {
        try {
            const response = await fetch(
                "http://localhost:3001/getstudent"
            );

            const result = await response.json();

            console.log("GET API Response:", result);

            if (!response.ok) {
                throw new Error(result.message || "Failed to fetch");
            }

            let studentData = [];

            if (Array.isArray(result)) {
                studentData = result;
            }
            else if (Array.isArray(result.data)) {
                studentData = result.data;
            }
            else if (Array.isArray(result.students)) {
                studentData = result.students;
            }
            else if (Array.isArray(result.message)) {
                studentData = result.message;
            }

            setStudents(studentData);

        } catch (error) {
            console.log("GET Error:", error);
            setStudents([]);
        } finally {
            setLoading(false);
        }
    }

    // CLEAR FORM
    const clearForm = () => {
        setName("");
        setRoll("");
        setAge("");
        setCourse("");
        setCity("");
        setEmail("");
        setEditMode(false);
        setEditStudentName(null);
    };

    // ADD AND UPDATE
    const handleSave = async (e) => {
        e.preventDefault();

        if (!name || !age || !course || !city || !email) {
            alert("Please fill all fields");
            return;
        }

        const studentData = {
            name,
            roll,
            age,
            course,
            city,
            email
        };

        try {
            let url;
            let method;

            if (editMode) {
                url = `http://localhost:3001/updatestudent?name=${encodeURIComponent(editStudentName)}`;
                method = "PUT";
            } else {
                url = "http://localhost:3001/insertstudent";
                method = "POST";
            }

            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData)
            });

            const data = await response.json();

            console.log("Save Response:", data);

            if (response.ok) {

                if (editMode) {

                    // Update table immediately
                    setStudents((prev) =>
                        prev.map((student) =>
                            student.name === editStudentName
                                ? { ...student, ...studentData }
                                : student
                        )
                    );

                    alert("Student updated successfully");

                } else {

                    alert("Student added successfully");

                    // Refresh table data
                    setLoading(true);
                    await getdata();
                }

                clearForm();
                setShowForm(false);

            } else {
                alert(data.message || "Operation failed");
            }

        } catch (error) {
            console.log("Save Error:", error);
            alert("Something went wrong");
        }
    };

    // EDIT
    const handleEdit = (student) => {

        setShowForm(true);
        setEditMode(true);

        setEditStudentName(student.name);

        setName(student.name || "");
        setRoll(student.roll || "");
        setAge(student.age || "");
        setCourse(student.course || "");
        setCity(student.city || "");
        setEmail(student.email || "");
    };

    // DELETE
    const handleDelete = async (student) => {

        if (!window.confirm("Are you sure you want to delete this student?")) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:3001/deletestudent/${encodeURIComponent(student.name)}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            console.log("Delete Response:", data);

            if (response.ok) {

                // Remove from table immediately
                setStudents((prev) =>
                    prev.filter((item) => item.name !== student.name)
                );

                alert("Student deleted successfully");

            } else {
                alert(data.message || "Delete failed");
            }

        } catch (error) {
            console.log("Delete Error:", error);
            alert("Something went wrong");
        }
    };

    // CANCEL
    const cancelForm = () => {
        clearForm();
        setShowForm(false);
    };

    // ADD FORM
    const openAddForm = () => {
        clearForm();
        setShowForm(true);
    };

    // CSS
    const styles = `

        .student-card {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }

        .student-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .student-top h2 {
            margin: 0 0 5px 0;
        }

        .student-top p {
            margin: 0;
            color: #666;
        }

        .student-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }

        .student-table th,
        .student-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        .student-table th {
            background: #2c3e50;
            color: white;
        }

        .student-table tr:hover {
            background: #f5f5f5;
        }

        .add-btn {
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 18px;
            border-radius: 5px;
            cursor: pointer;
        }

        .edit-btn {
            background: #27ae60;
            color: white;
            border: none;
            padding: 7px 13px;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 8px;
        }

        .delete-btn {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 7px 13px;
            border-radius: 4px;
            cursor: pointer;
        }

        .bottom-form {
            background: white;
            width: 100%;
            margin-top: 25px;
            padding: 25px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            box-sizing: border-box;
        }

        .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .form-header h2 {
            margin: 0;
            font-size: 25px;
        }

        .close-btn {
            border: none;
            background: transparent;
            font-size: 28px;
            cursor: pointer;
        }

        .bottom-form label {
            display: block;
            margin-top: 15px;
            margin-bottom: 7px;
            font-size: 14px;
            font-weight: bold;
        }

        .bottom-form input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 15px;
            box-sizing: border-box;
        }

        .bottom-form input:focus {
            border-color: #3498db;
            outline: none;
        }

        .form-buttons {
            display: flex;
            gap: 10px;
            margin-top: 22px;
        }

        .save-btn {
            background: #27ae60;
            color: white;
            border: none;
            padding: 10px 22px;
            border-radius: 5px;
            cursor: pointer;
        }

        .cancel-btn {
            background: #6366b5;
            color: white;
            border: none;
            padding: 10px 22px;
            border-radius: 5px;
            cursor: pointer;
        }

        @media(max-width: 768px) {

            .student-top {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }

            .student-card {
                padding: 15px;
                overflow-x: auto;
            }

            .bottom-form {
                padding: 15px;
            }
        }

    `;

    return (
        <>
            <style>{styles}</style>

            <div className="student-card">

                <div className="student-top">

                    <div>
                        <h2>Students</h2>
                        <p>Here you can manage all students.</p>
                    </div>

                    <button
                        className="add-btn"
                        onClick={openAddForm}
                    >
                        + Add Student
                    </button>

                </div>

                {loading ? (

                    <p>Loading students...</p>

                ) : (

                    <table className="student-table">

                        <thead>
                            <tr>
                                <th>Sr.no.</th>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {students.length > 0 ? (

                                students.map((student, index) => (

                                    <tr key={student._id || student.id || index}>

                                        <td>{index + 1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.course || "-"}</td>
                                        <td>{student.email || "-"}</td>
                                        <td>{student.age || "-"}</td>
                                        <td>{student.city || "-"}</td>

                                        <td>

                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEdit(student)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(student)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td colSpan="7">
                                        No students found
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                )}

                {showForm && (

                    <div className="bottom-form">

                        <div className="form-header">

                            <h2>
                                {editMode ? "Edit Student" : "Add Student"}
                            </h2>

                            <button
                                className="close-btn"
                                onClick={cancelForm}
                            >
                                ×
                            </button>

                        </div>

                        <form onSubmit={handleSave}>

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
                            />

                            <label>City</label>
                            <input
                                type="text"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
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

                            <label>Course</label>
                            <input
                                type="text"
                                placeholder="Enter course"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                required
                            />

                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <div className="form-buttons">

                                <button
                                    className="save-btn"
                                    type="submit"
                                >
                                    {editMode ? "Update" : "Save"}
                                </button>

                                <button
                                    className="cancel-btn"
                                    type="button"
                                    onClick={cancelForm}
                                >
                                    Cancel
                                </button>

                            </div>

                        </form>

                    </div>

                )}

            </div>
        </>
    );
}

export default Students;
