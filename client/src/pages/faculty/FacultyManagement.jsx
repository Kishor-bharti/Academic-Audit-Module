// import { useState } from 'react';

// const FacultyManagement = () => {
//     const [showForm, setShowForm] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');

//     const faculty = [
//         { id: 'FAC001', name: 'Dr. John Smith', email: 'john.smith@example.com', department: 'Computer Science', designation: 'Professor' },
//         { id: 'FAC002', name: 'Dr. Sarah Johnson', email: 'sarah.j@example.com', department: 'Electronics', designation: 'Associate Professor' },
//         { id: 'FAC003', name: 'Dr. Michael Brown', email: 'michael.b@example.com', department: 'Mechanical', designation: 'Assistant Professor' },
//     ];

//     return (
//         <div>
//             <div className="page-header">
//                 <h1 className="page-title">Faculty Management</h1>
//                 <p className="page-subtitle">Manage faculty members and their information</p>
//             </div>

//             <div className="page-actions">
//                 <div className="search-bar">
//                     <input
//                         type="text"
//                         className="search-input"
//                         placeholder="Search faculty..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//                 <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
//                     {showForm ? 'Cancel' : 'Add Faculty'}
//                 </button>
//             </div>

//             {showForm && (
//                 <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
//                     <div className="card-header">
//                         <h3 className="card-title">Add New Faculty</h3>
//                     </div>
//                     <form>
//                         <div className="grid grid-2">
//                             <div className="form-group">
//                                 <label className="form-label">Faculty ID</label>
//                                 <input type="text" className="form-input" placeholder="Enter faculty ID" />
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
//                                 <label className="form-label">Designation</label>
//                                 <select className="form-select">
//                                     <option>Professor</option>
//                                     <option>Associate Professor</option>
//                                     <option>Assistant Professor</option>
//                                     <option>Lecturer</option>
//                                 </select>
//                             </div>
//                             <div className="form-group">
//                                 <label className="form-label">Specialization</label>
//                                 <input type="text" className="form-input" placeholder="Enter specialization" />
//                             </div>
//                         </div>
//                         <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
//                             <button type="submit" className="btn btn-primary">Add Faculty</button>
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
//                                 <th>Faculty ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Department</th>
//                                 <th>Designation</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {faculty.map((member) => (
//                                 <tr key={member.id}>
//                                     <td>{member.id}</td>
//                                     <td>{member.name}</td>
//                                     <td>{member.email}</td>
//                                     <td>{member.department}</td>
//                                     <td>{member.designation}</td>
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

// export default FacultyManagement;



import { useState, useEffect } from "react";
import axios from "axios";

const FacultyManagement = () => {
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [facultyData, setFacultyData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [faculty, setFaculty] = useState({
        facultyId: "",
        fullName: "",
        email: "",
        department: "",
        designation: "",
        specialization: ""
    });

    const fetchFaculty = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/faculty");
            setFacultyData(response.data);
        } catch (error) {
            console.error("Error fetching faculty:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFaculty();
    }, []);

    const handleChange = (e) => {
        setFaculty({
            ...faculty,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setFaculty({
            facultyId: "",
            fullName: "",
            email: "",
            department: "",
            designation: "",
            specialization: ""
        });
        setShowForm(false);
        setIsEditing(false);
        setEditingId(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditing) {
                await axios.put(`/api/faculty/${editingId}`, {
                    id: editingId,
                    ...faculty
                });
                alert("Faculty updated successfully!");
            } else {
                await axios.post("/api/faculty", faculty);
                alert("Faculty added successfully!");
            }

            fetchFaculty();
            resetForm();
        } catch (error) {
            console.error("Operation failed:", error);
            alert("Operation failed");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this faculty?")) return;

        try {
            await axios.delete(`/api/faculty/${id}`);
            alert("Faculty deleted successfully!");
            fetchFaculty();
        } catch (error) {
            console.error("Delete failed:", error);
            alert("Delete failed");
        }
    };

    const handleEdit = (member) => {
        setFaculty({
            facultyId: member.facultyId,
            fullName: member.fullName,
            email: member.email,
            department: member.department,
            designation: member.designation,
            specialization: member.specialization
        });

        setEditingId(member.id);
        setIsEditing(true);
        setShowForm(true);
    };

    const filteredFaculty = facultyData.filter((f) =>
        f.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.facultyId?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Faculty Management</h1>
                <p className="page-subtitle">
                    Manage faculty members and their information
                </p>
            </div>

            <div className="page-actions">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search faculty..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Cancel" : "Add Faculty"}
                </button>
            </div>

            {showForm && (
                <div className="card" style={{ marginBottom: "var(--spacing-xl)" }}>
                    <div className="card-header">
                        <h3 className="card-title">
                            {isEditing ? "Edit Faculty" : "Add New Faculty"}
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-2">
                            <div className="form-group">
                                <label className="form-label">Faculty ID</label>
                                <input
                                    type="text"
                                    name="facultyId"
                                    value={faculty.facultyId}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={faculty.fullName}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={faculty.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Department</label>
                                <select
                                    name="department"
                                    value={faculty.department}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="">Select</option>
                                    <option>Computer Science</option>
                                    <option>Electronics</option>
                                    <option>Mechanical</option>
                                    <option>Civil</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Designation</label>
                                <select
                                    name="designation"
                                    value={faculty.designation}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option>Professor</option>
                                    <option>Associate Professor</option>
                                    <option>Assistant Professor</option>
                                    <option>Lecturer</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Specialization</label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={faculty.specialization}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "var(--spacing-md)", marginTop: "var(--spacing-lg)" }}>
                            <button type="submit" className="btn btn-primary">
                                {isEditing ? "Update Faculty" : "Add Faculty"}
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={resetForm}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="card">
                <div className="table-container">
                    {loading ? (
                        <p>Loading faculty...</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Faculty ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Designation</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredFaculty.map((member) => (
                                    <tr key={member.id}>
                                        <td>{member.facultyId}</td>
                                        <td>{member.fullName}</td>
                                        <td>{member.email}</td>
                                        <td>{member.department}</td>
                                        <td>{member.designation}</td>
                                        <td>
                                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                                <button
                                                    className="btn btn-sm btn-secondary"
                                                    onClick={() => handleEdit(member)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDelete(member.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FacultyManagement;