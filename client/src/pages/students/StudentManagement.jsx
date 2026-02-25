// import { useState } from 'react';

// const StudentManagement = () => {
//     const [showForm, setShowForm] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');

//     const students = [
//         { id: 'STU001', name: 'Abc', email: 'abc@example.com', department: 'Computer Science', semester: '6th' },
//         { id: 'STU002', name: 'Bca', email: 'bca@example.com', department: 'Electronics', semester: '4th' },
//         { id: 'STU003', name: 'Cab', email: 'cab@example.com', department: 'Mechanical', semester: '8th' },
//     ];

//     return (
//         <div>
//             <div className="page-header">
//                 <h1 className="page-title">Student Management</h1>
//                 <p className="page-subtitle">Manage student records and information</p>
//             </div>

//             <div className="page-actions">
//                 <div className="search-bar">
//                     <input
//                         type="text"
//                         className="search-input"
//                         placeholder="Search students..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//                 <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
//                     {showForm ? 'Cancel' : 'Add Student'}
//                 </button>
//             </div>

//             {showForm && (
//                 <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
//                     <div className="card-header">
//                         <h3 className="card-title">Add New Student</h3>
//                     </div>
//                     <form>
//                         <div className="grid grid-2">
//                             <div className="form-group">
//                                 <label className="form-label">Student ID</label>
//                                 <input type="text" className="form-input" placeholder="Enter student ID" />
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-label">Full Name</label>
//                                 <input type="text" className="form-input" placeholder="Enter full name" />
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-label">Email</label>
//                                 <input type="email" className="form-input" placeholder="Enter email" />
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-label">Department</label>
//                                 <select className="form-select">
//                                     <option>Computer Science</option>
//                                     <option>Electronics</option>
//                                     <option>Mechanical</option>
//                                     <option>Civil</option>
//                                 </select>
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-label">Semester</label>
//                                 <select className="form-select">
//                                     <option>1st</option>
//                                     <option>2nd</option>
//                                     <option>3rd</option>
//                                     <option>4th</option>
//                                     <option>5th</option>
//                                     <option>6th</option>
//                                     <option>7th</option>
//                                     <option>8th</option>
//                                 </select>
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-label">Year</label>
//                                 <input type="text" className="form-input" placeholder="e.g., 2024" />
//                             </div>
//                         </div>
//                         <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
//                             <button type="submit" className="btn btn-primary">Add Student</button>
//                             <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
//                         </div>
//                     </form>
//                 </div>
//             )}

//             <div className="card">
//                 <div className="table-container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Student ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Department</th>
//                                 <th>Semester</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {students.map((student) => (
//                                 <tr key={student.id}>
//                                     <td>{student.id}</td>
//                                     <td>{student.name}</td>
//                                     <td>{student.email}</td>
//                                     <td>{student.department}</td>
//                                     <td>{student.semester}</td>
//                                     <td>
//                                         <div style={{ display: 'flex', gap: '0.5rem' }}>
//                                             <button className="btn btn-sm btn-secondary">Edit</button>
//                                             <button className="btn btn-sm btn-danger">Delete</button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentManagement;




// import { useState } from "react";
// import axios from "axios";

// const StudentManagement = () => {
//     const [showForm, setShowForm] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");

//     const [student, setStudent] = useState({
//         studentId: "",
//         fullName: "",
//         email: "",
//         department: "",
//         semester: "",
//         year: ""
//     });

//     const [students, setStudents] = useState([]); // will later come from backend

//     // Handle form input change
//     const handleChange = (e) => {
//         setStudent({
//             ...student,
//             [e.target.name]: e.target.value
//         });
//     };

//     // Handle submit
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // try {
//         //     const response = await axios.post(
//         //         "http://localhost:5001/api/student",
//         //         student
//         //     );
//         try {
//             const response = await axios.post(
//                 "/api/student",student);

//             // Add new student to UI list
//             setStudents([...students, response.data]);

//             alert("Student added successfully!");

//             setStudent({
//                 studentId: "",
//                 fullName: "",
//                 email: "",
//                 department: "",
//                 semester: "",
//                 year: ""
//             });

//             setShowForm(false);
//         } catch (error) {
//             console.error(error);
//             alert("Error adding student");
//         }
//     };

//     // Filter students based on search
//     const filteredStudents = students.filter((s) =>
//         s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         s.studentId?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <div className="page-header">
//                 <h1 className="page-title">Student Management</h1>
//                 <p className="page-subtitle">
//                     Manage student records and information
//                 </p>
//             </div>

//             <div className="page-actions">
//                 <div className="search-bar">
//                     <input
//                         type="text"
//                         className="search-input"
//                         placeholder="Search students..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>

//                 <button
//                     className="btn btn-primary"
//                     onClick={() => setShowForm(!showForm)}
//                 >
//                     {showForm ? "Cancel" : "Add Student"}
//                 </button>
//             </div>

//             {showForm && (
//                 <div className="card" style={{ marginBottom: "20px" }}>
//                     <div className="card-header">
//                         <h3>Add New Student</h3>
//                     </div>

//                     <form onSubmit={handleSubmit}>
//                         <div className="grid grid-2">
//                             <div className="form-group">
//                                 <label>Student ID</label>
//                                 <input
//                                     type="text"
//                                     name="studentId"
//                                     value={student.studentId}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Full Name</label>
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={student.fullName}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={student.email}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Department</label>
//                                 <select
//                                     name="department"
//                                     value={student.department}
//                                     onChange={handleChange}
//                                     className="form-select"
//                                 >
//                                     <option value="">Select</option>
//                                     <option value="Computer Science">
//                                         Computer Science
//                                     </option>
//                                     <option value="Electronics">
//                                         Electronics
//                                     </option>
//                                     <option value="Mechanical">
//                                         Mechanical
//                                     </option>
//                                     <option value="Civil">Civil</option>
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label>Semester</label>
//                                 <select
//                                     name="semester"
//                                     value={student.semester}
//                                     onChange={handleChange}
//                                     className="form-select"
//                                 >
//                                     <option value="">Select</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label>Year</label>
//                                 <input
//                                     type="text"
//                                     name="year"
//                                     value={student.year}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                 />
//                             </div>
//                         </div>

//                         <div style={{ marginTop: "15px" }}>
//                             <button type="submit" className="btn btn-primary">
//                                 Add Student
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             )}

//             <div className="card">
//                 <div className="table-container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Student ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Department</th>
//                                 <th>Semester</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredStudents.map((s) => (
//                                 <tr key={s.id}>
//                                     <td>{s.studentId}</td>
//                                     <td>{s.fullName}</td>
//                                     <td>{s.email}</td>
//                                     <td>{s.department}</td>
//                                     <td>{s.semester}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentManagement;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const StudentManagement = () => {
//     const [showForm, setShowForm] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");

//     const [student, setStudent] = useState({
//         studentId: "",
//         fullName: "",
//         email: "",
//         department: "",
//         semester: "",
//         year: ""
//     });

//     const [students, setStudents] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // ================= FETCH STUDENTS =================
//     const fetchStudents = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get("/api/student");
//             setStudents(response.data);
//         } catch (error) {
//             console.error("Error fetching students:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Load students when page loads
//     useEffect(() => {
//         fetchStudents();
//     }, []);

//     // ================= HANDLE INPUT CHANGE =================
//     const handleChange = (e) => {
//         setStudent({
//             ...student,
//             [e.target.name]: e.target.value
//         });
//     };

//     // ================= HANDLE FORM SUBMIT =================
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await axios.post("/api/student", student);

//             alert("Student added successfully!");

//             // Refresh full list from DB
//             fetchStudents();

//             // Reset form
//             setStudent({
//                 studentId: "",
//                 fullName: "",
//                 email: "",
//                 department: "",
//                 semester: "",
//                 year: ""
//             });

//             setShowForm(false);
//         } catch (error) {
//             console.error("Error adding student:", error);
//             alert("Error adding student");
//         }
//     };

//     // ================= SEARCH FILTER =================
//     const filteredStudents = students.filter((s) =>
//         s.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         s.studentId?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <div className="page-header">
//                 <h1 className="page-title">Student Management</h1>
//                 <p className="page-subtitle">
//                     Manage student records and information
//                 </p>
//             </div>

//             <div className="page-actions">
//                 <div className="search-bar">
//                     <input
//                         type="text"
//                         className="search-input"
//                         placeholder="Search students..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>

//                 <button
//                     className="btn btn-primary"
//                     onClick={() => setShowForm(!showForm)}
//                 >
//                     {showForm ? "Cancel" : "Add Student"}
//                 </button>
//             </div>

//             {showForm && (
//                 <div className="card" style={{ marginBottom: "20px" }}>
//                     <div className="card-header">
//                         <h3>Add New Student</h3>
//                     </div>

//                     <form onSubmit={handleSubmit}>
//                         <div className="grid grid-2">
//                             <div className="form-group">
//                                 <label>Student ID</label>
//                                 <input
//                                     type="text"
//                                     name="studentId"
//                                     value={student.studentId}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Full Name</label>
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={student.fullName}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={student.email}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Department</label>
//                                 <select
//                                     name="department"
//                                     value={student.department}
//                                     onChange={handleChange}
//                                     className="form-select"
//                                     required
//                                 >
//                                     <option value="">Select</option>
//                                     <option value="Computer Science">Computer Science</option>
//                                     <option value="Electronics">Electronics</option>
//                                     <option value="Mechanical">Mechanical</option>
//                                     <option value="Civil">Civil</option>
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label>Semester</label>
//                                 <select
//                                     name="semester"
//                                     value={student.semester}
//                                     onChange={handleChange}
//                                     className="form-select"
//                                     required
//                                 >
//                                     <option value="">Select</option>
//                                     {[1,2,3,4,5,6,7,8].map((sem) => (
//                                         <option key={sem} value={sem}>
//                                             {sem}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label>Year</label>
//                                 <input
//                                     type="text"
//                                     name="year"
//                                     value={student.year}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div style={{ marginTop: "15px" }}>
//                             <button type="submit" className="btn btn-primary">
//                                 Add Student
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             )}

//             <div className="card">
//                 <div className="table-container">
//                     {loading ? (
//                         <p>Loading students...</p>
//                     ) : (
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th>Student ID</th>
//                                     <th>Name</th>
//                                     <th>Email</th>
//                                     <th>Department</th>
//                                     <th>Semester</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {filteredStudents.length === 0 ? (
//                                     <tr>
//                                         <td colSpan="5">No students found</td>
//                                     </tr>
//                                 ) : (
//                                     filteredStudents.map((s) => (
//                                         <tr key={s.id}>
//                                             <td>{s.studentId}</td>
//                                             <td>{s.fullName}</td>
//                                             <td>{s.email}</td>
//                                             <td>{s.department}</td>
//                                             <td>{s.semester}</td>
//                                         </tr>
//                                     ))
//                                 )}
//                             </tbody>
//                         </table>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentManagement;



import { useState, useEffect } from "react";
import axios from "axios";

const StudentManagement = () => {
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [student, setStudent] = useState({
        studentId: "",
        fullName: "",
        email: "",
        department: "",
        semester: "",
        year: ""
    });

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/student");
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setStudent({
            studentId: "",
            fullName: "",
            email: "",
            department: "",
            semester: "",
            year: ""
        });
        setShowForm(false);
        setIsEditing(false);
        setEditingId(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditing) {
                await axios.put(`/api/student/${editingId}`, {
                    id: editingId,
                    ...student
                });
                alert("Student updated successfully!");
            } else {
                await axios.post("/api/student", student);
                alert("Student added successfully!");
            }

            fetchStudents();
            resetForm();
        } catch (error) {
            console.error("Operation failed:", error);
            alert("Operation failed");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this student?")) return;

        try {
            await axios.delete(`/api/student/${id}`);
            alert("Student deleted successfully!");
            fetchStudents();
        } catch (error) {
            console.error("Delete failed:", error);
            alert("Delete failed");
        }
    };

    const handleEdit = (s) => {
        setStudent({
            studentId: s.studentId,
            fullName: s.fullName,
            email: s.email,
            department: s.department,
            semester: s.semester,
            year: s.year
        });

        setEditingId(s.id);
        setIsEditing(true);
        setShowForm(true);
    };

    const filteredStudents = students.filter((s) =>
        s.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.studentId?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Student Management</h1>
                <p className="page-subtitle">
                    Manage student records and information
                </p>
            </div>

            <div className="page-actions">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Cancel" : "Add Student"}
                </button>
            </div>

            {showForm && (
                <div className="card" style={{ marginBottom: "20px" }}>
                    <div className="card-header">
                        <h3>{isEditing ? "Edit Student" : "Add New Student"}</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-2">
                            <div className="form-group">
                                <label>Student ID</label>
                                <input
                                    type="text"
                                    name="studentId"
                                    value={student.studentId}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={student.fullName}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={student.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Department</label>
                                <select
                                    name="department"
                                    value={student.department}
                                    onChange={handleChange}
                                    className="form-select"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Mechanical">Mechanical</option>
                                    <option value="Civil">Civil</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Semester</label>
                                <select
                                    name="semester"
                                    value={student.semester}
                                    onChange={handleChange}
                                    className="form-select"
                                    required
                                >
                                    <option value="">Select</option>
                                    {[1,2,3,4,5,6,7,8].map((sem) => (
                                        <option key={sem} value={sem}>
                                            {sem}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Year</label>
                                <input
                                    type="text"
                                    name="year"
                                    value={student.year}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: "15px" }}>
                            <button type="submit" className="btn btn-primary">
                                {isEditing ? "Update Student" : "Add Student"}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="card">
                <div className="table-container">
                    {loading ? (
                        <p>Loading students...</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Semester</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.length === 0 ? (
                                    <tr>
                                        <td colSpan="6">No students found</td>
                                    </tr>
                                ) : (
                                    filteredStudents.map((s) => (
                                        <tr key={s.id}>
                                            <td>{s.studentId}</td>
                                            <td>{s.fullName}</td>
                                            <td>{s.email}</td>
                                            <td>{s.department}</td>
                                            <td>{s.semester}</td>
                                            <td>
                                                <button
                                                    className="btn btn-secondary"
                                                    style={{ marginRight: "8px" }}
                                                    onClick={() => handleEdit(s)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(s.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentManagement;
