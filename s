[1mdiff --git a/client/src/pages/faculty/FacultyManagement.jsx b/client/src/pages/faculty/FacultyManagement.jsx[m
[1mindex feedfe6..9eb1f90 100644[m
[1m--- a/client/src/pages/faculty/FacultyManagement.jsx[m
[1m+++ b/client/src/pages/faculty/FacultyManagement.jsx[m
[36m@@ -1,20 +1,249 @@[m
[31m-import { useState } from 'react';[m
[32m+[m[32m// import { useState } from 'react';[m
[32m+[m
[32m+[m[32m// const FacultyManagement = () => {[m
[32m+[m[32m//     const [showForm, setShowForm] = useState(false);[m
[32m+[m[32m//     const [searchTerm, setSearchTerm] = useState('');[m
[32m+[m
[32m+[m[32m//     const faculty = [[m
[32m+[m[32m//         { id: 'FAC001', name: 'Dr. John Smith', email: 'john.smith@example.com', department: 'Computer Science', designation: 'Professor' },[m
[32m+[m[32m//         { id: 'FAC002', name: 'Dr. Sarah Johnson', email: 'sarah.j@example.com', department: 'Electronics', designation: 'Associate Professor' },[m
[32m+[m[32m//         { id: 'FAC003', name: 'Dr. Michael Brown', email: 'michael.b@example.com', department: 'Mechanical', designation: 'Assistant Professor' },[m
[32m+[m[32m//     ];[m
[32m+[m
[32m+[m[32m//     return ([m
[32m+[m[32m//         <div>[m
[32m+[m[32m//             <div className="page-header">[m
[32m+[m[32m//                 <h1 className="page-title">Faculty Management</h1>[m
[32m+[m[32m//                 <p className="page-subtitle">Manage faculty members and their information</p>[m
[32m+[m[32m//             </div>[m
[32m+[m
[32m+[m[32m//             <div className="page-actions">[m
[32m+[m[32m//                 <div className="search-bar">[m
[32m+[m[32m//                     <input[m
[32m+[m[32m//                         type="text"[m
[32m+[m[32m//                         className="search-input"[m
[32m+[m[32m//                         placeholder="Search faculty..."[m
[32m+[m[32m//                         value={searchTerm}[m
[32m+[m[32m//                         onChange={(e) => setSearchTerm(e.target.value)}[m
[32m+[m[32m//                     />[m
[32m+[m[32m//                 </div>[m
[32m+[m[32m//                 <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>[m
[32m+[m[32m//                     {showForm ? 'Cancel' : 'Add Faculty'}[m
[32m+[m[32m//                 </button>[m
[32m+[m[32m//             </div>[m
[32m+[m
[32m+[m[32m//             {showForm && ([m
[32m+[m[32m//                 <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>[m
[32m+[m[32m//                     <div className="card-header">[m
[32m+[m[32m//                         <h3 className="card-title">Add New Faculty</h3>[m
[32m+[m[32m//                     </div>[m
[32m+[m[32m//                     <form>[m
[32m+[m[32m//                         <div className="grid grid-2">[m
[32m+[m[32m//                             <div className="form-group">[m
[32m+[m[32m//                                 <label className="form-label">Faculty ID</label>[m
[32m+[m[32m//                                 <input type="text" className="form-input" placeholder="Enter faculty ID" />[m
[32m+[m[32m//                             </div>[m
[32m+[m[32m//                             <div className="form-group">[m
[32m+[m[32m//                                 <label className="form-label">Full Name</label>[m
[32m+[m[32m//                                 <input type="text" className="form-input" placeholder="Enter full name" />[m
[32m+[m[32m//                             </div>[m
[32m+[m[32m//                             <div className="form-group">[m
[32m+[m[32m//                                 <label className="form-label">Email</label>[m
[32m+[m[32m//                                 <input type="email" className="form-input" placeholder="Enter email" />[m
[32m+[m[32m//                             </div>[m
[32m+[m[32m//                             <div className="form-group">[m
[32m+[m[32m//                                 <label className="form-label">Department</label>[m
[32m+[m[32m//                                 <select className="form-select">[m
[32m+[m[32m//                                     <option>Computer Science</option>[m
[32m+[m[32m//                                     <option>Electronics</option>[m
[32m+[m[32m//                                     <option>Mechanical</option>[m
[32m+[m[32m//                                     <option>Civil</option>[m
[32m+[m[32m//                                 </select>[m
[32m+[m[32m//                             </div>[m
[32m+[m[32m//                             <div className="form-group">[m
[32m+[m[32m//                                 <label className="form-label">Designation</label>[m
[32m+[m[32m//                                 <select className="form-select">[m
[32m+[m[32m//                                     <option>Professor</option>[m
[32m+[m[32m//                                     <option>Associate Professor</option>[m
[32m+[m[32m//                                     <option>Assistant Professor</option>[m
[32m+[m[32m//                                     <option>Lecturer</option>[m
[32m+[m[32m//                                 </select>[m
[32m+[m[32m//                             </div>[m
[32m+[m[32m//                             <div className="form-group">[m
[32m+[m[32m//                                 <label className="form-label">Specialization</label>[m
[32m+[m[32m//                                 <input type="text" className="form-input" placeholder="Enter specialization" />[m
[32m+[m[32m//                             </div>[m
[32m+[m[32m//                         </div>[m
[32m+[m[32m//                         <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>[m
[32m+[m[32m//                             <button type="submit" className="btn btn-primary">Add Faculty</button>[m
[32m+[m[32m//                             <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>[m
[32m+[m[32m//                         </div>[m
[32m+[m[32m//                     </form>[m
[32m+[m[32m//                 </div>[m
[32m+[m[32m//             )}[m
[32m+[m
[32m+[m[32m//             <div className="card">[m
[32m+[m[32m//                 <div className="table-container">[m
[32m+[m[32m//                     <table className="table">[m
[32m+[m[32m//                         <thead>[m
[32m+[m[32m//                             <tr>[m
[32m+[m[32m//                                 <th>Faculty ID</th>[m
[32m+[m[32m//                                 <th>Name</th>[m
[32m+[m[32m//                                 <th>Email</th>[m
[32m+[m[32m//                                 <th>Department</th>[m
[32m+[m[32m//                                 <th>Designation</th>[m
[32m+[m[32m//                                 <th>Actions</th>[m
[32m+[m[32m//                             </tr>[m
[32m+[m[32m//                         </thead>[m
[32m+[m[32m//                         <tbody>[m
[32m+[m[32m//                             {faculty.map((member) => ([m
[32m+[m[32m//                                 <tr key={member.id}>[m
[32m+[m[32m//                                     <td>{member.id}</td>[m
[32m+[m[32m//                                     <td>{member.name}</td>[m
[32m+[m[32m//                                     <td>{member.email}</td>[m
[32m+[m[32m//                                     <td>{member.department}</td>[m
[32m+[m[32m//                                     <td>{member.designation}</td>[m
[32m+[m[32m//                                     <td>[m
[32m+[m[32m//                                         <div style={{ display: 'flex', gap: '0.5rem' }}>[m
[32m+[m[32m//                                             <button className="btn btn-sm btn-secondary">Edit</button>[m
[32m+[m[32m//                                             <button className="btn btn-sm btn-danger">Delete</button>[m
[32m+[m[32m//                                         </div>[m
[32m+[m[32m//                                     </td>[m
[32m+[m[32m//                                 </tr>[m
[32m+[m[32m//                             ))}[m
[32m+[m[32m//                         </tbody>[m
[32m+[m[32m//                     </table>[m
[32m+[m[32m//                 </div>[m
[32m+[m[32m//             </div>[m
[32m+[m[32m//         </div>[m
[32m+[m[32m//     );[m
[32m+[m[32m// };[m
[32m+[m
[32m+[m[32m// export default FacultyManagement;[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32mimport { useState, useEffect } from "react";[m
[32m+[m[32mimport axios from "axios";[m
 [m
 const FacultyManagement = () => {[m
     const [showForm, setShowForm] = useState(false);[m
[31m-    const [searchTerm, setSearchTerm] = useState('');[m
[32m+[m[32m    const [searchTerm, setSearchTerm] = useState("");[m
[32m+[m[32m    const [isEditing, setIsEditing] = useState(false);[m
[32m+[m[32m    const [editingId, setEditingId] = useState(null);[m
[32m+[m
[32m+[m[32m    const [facultyData, setFacultyData] = useState([]);[m
[32m+[m[32m    const [loading, setLoading] = useState(false);[m
[32m+[m
[32m+[m[32m    const [faculty, setFaculty] = useState({[m
[32m+[m[32m        facultyId: "",[m
[32m+[m[32m        fullName: "",[m
[32m+[m[32m        email: "",[m
[32m+[m[32m        department: "",[m
[32m+[m[32m        designation: "",[m
[32m+[m[32m        specialization: ""[m
[32m+[m[32m    });[m
[32m+[m
[32m+[m[32m    const fetchFaculty = async () => {[m
[32m+[m[32m        try {[m
[32m+[m[32m            setLoading(true);[m
[32m+[m[32m            const response = await axios.get("/api/faculty");[m
[32m+[m[32m            setFacultyData(response.data);[m
[32m+[m[32m        } catch (error) {[m
[32m+[m[32m            console.error("Error fetching faculty:", error);[m
[32m+[m[32m        } finally {[m
[32m+[m[32m            setLoading(false);[m
[32m+[m[32m        }[m
[32m+[m[32m    };[m
[32m+[m
[32m+[m[32m    useEffect(() => {[m
[32m+[m[32m        fetchFaculty();[m
[32m+[m[32m    }, []);[m
[32m+[m
[32m+[m[32m    const handleChange = (e) => {[m
[32m+[m[32m        setFaculty({[m
[32m+[m[32m            ...faculty,[m
[32m+[m[32m            [e.target.name]: e.target.value[m
[32m+[m[32m        });[m
[32m+[m[32m    };[m
 [m
[31m-    const faculty = [[m
[31m-        { id: 'FAC001', name: 'Dr. John Smith', email: 'john.smith@example.com', department: 'Computer Science', designation: 'Professor' },[m
[31m-        { id: 'FAC002', name: 'Dr. Sarah Johnson', email: 'sarah.j@example.com', department: 'Electronics', designation: 'Associate Professor' },[m
[31m-        { id: 'FAC003', name: 'Dr. Michael Brown', email: 'michael.b@example.com', department: 'Mechanical', designation: 'Assistant Professor' },[m
[31m-    ];[m
[32m+[m[32m    const resetForm = () => {[m
[32m+[m[32m        setFaculty({[m
[32m+[m[32m            facultyId: "",[m
[32m+[m[32m            fullName: "",[m
[32m+[m[32m            email: "",[m
[32m+[m[32m            department: "",[m
[32m+[m[32m            designation: "",[m
[32m+[m[32m            specialization: ""[m
[32m+[m[32m        });[m
[32m+[m[32m        setShowForm(false);[m
[32m+[m[32m        setIsEditing(false);[m
[32m+[m[32m        setEditingId(null);[m
[32m+[m[32m    };[m
[32m+[m
[32m+[m[32m    const handleSubmit = async (e) => {[m
[32m+[m[32m        e.preventDefault();[m
[32m+[m
[32m+[m[32m        try {[m
[32m+[m[32m            if (isEditing) {[m
[32m+[m[32m                await axios.put(`/api/faculty/${editingId}`, {[m
[32m+[m[32m                    id: editingId,[m
[32m+[m[32m                    ...faculty[m
[32m+[m[32m                });[m
[32m+[m[32m                alert("Faculty updated successfully!");[m
[32m+[m[32m            } else {[m
[32m+[m[32m                await axios.post("/api/faculty", faculty);[m
[32m+[m[32m                alert("Faculty added successfully!");[m
[32m+[m[32m            }[m
[32m+[m
[32m+[m[32m            fetchFaculty();[m
[32m+[m[32m            resetForm();[m
[32m+[m[32m        } catch (error) {[m
[32m+[m[32m            console.error("Operation failed:", error);[m
[32m+[m[32m            alert("Operation failed");[m
[32m+[m[32m        }[m
[32m+[m[32m    };[m
[32m+[m
[32m+[m[32m    const handleDelete = async (id) => {[m
[32m+[m[32m        if (!window.confirm("Are you sure you want to delete this faculty?")) return;[m
[32m+[m
[32m+[m[32m        try {[m
[32m+[m[32m            await axios.delete(`/api/faculty/${id}`);[m
[32m+[m[32m            alert("Faculty deleted successfully!");[m
[32m+[m[32m            fetchFaculty();[m
[32m+[m[32m        } catch (error) {[m
[32m+[m[32m            console.error("Delete failed:", error);[m
[32m+[m[32m            alert("Delete failed");[m
[32m+[m[32m        }[m
[32m+[m[32m    };[m
[32m+[m
[32m+[m[32m    const handleEdit = (member) => {[m
[32m+[m[32m        setFaculty({[m
[32m+[m[32m            facultyId: member.facultyId,[m
[32m+[m[32m            fullName: member.fullName,[m
[32m+[m[32m            email: member.email,[m
[32m+[m[32m            department: member.department,[m
[32m+[m[32m            designation: member.designation,[m
[32m+[m[32m            specialization: member.specialization[m
[32m+[m[32m        });[m
[32m+[m
[32m+[m[32m        setEditingId(member.id);[m
[32m+[m[32m        setIsEditing(true);[m
[32m+[m[32m        setShowForm(true);[m
[32m+[m[32m    };[m
[32m+[m
[32m+[m[32m    const filteredFaculty = facultyData.filter((f) =>[m
[32m+[m[32m        f.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||[m
[32m+[m[32m        f.facultyId?.toLowerCase().includes(searchTerm.toLowerCase())[m
[32m+[m[32m    );[m
 [m
     return ([m
         <div>[m
             <div className="page-header">[m
                 <h1 className="page-title">Faculty Management</h1>[m
[31m-                <p className="page-subtitle">Manage faculty members and their information</p>[m
[32m+[m[32m                <p className="page-subtitle">[m
[32m+[m[32m                    Manage faculty members and their information[m
[32m+[m[32m                </p>[m
             </div>[m
 [m
             <div className="page-actions">[m
[36m@@ -27,56 +256,109 @@[m [mconst FacultyManagement = () => {[m
                         onChange={(e) => setSearchTerm(e.target.value)}[m
                     />[m
                 </div>[m
[31m-                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>[m
[31m-                    {showForm ? 'Cancel' : 'Add Faculty'}[m
[32m+[m[32m                <button[m
[32m+[m[32m                    className="btn btn-primary"[m
[32m+[m[32m                    onClick={() => setShowForm(!showForm)}[m
[32m+[m[32m                >[m
[32m+[m[32m                    {showForm ? "Cancel" : "Add Faculty"}[m
                 </button>[m
             </div>[m
 [m
             {showForm && ([m
[31m-                <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>[m
[32m+[m[32m                <div className="card" style={{ marginBottom: "var(--spacing-xl)" }}>[m
                     <div className="card-header">[m
[31m-                        <h3 className="card-title">Add New Faculty</h3>[m
[32m+[m[32m                        <h3 className="card-title">[m
[32m+[m[32m                            {isEditing ? "Edit Faculty" : "Add New Faculty"}[m
[32m+[m[32m                        </h3>[m
                     </div>[m
[31m-                    <form>[m
[32m+[m[32m                    <form onSubmit={handleSubmit}>[m
                         <div className="grid grid-2">[m
                             <div className="form-group">[m
                                 <label className="form-label">Faculty ID</label>[m
[31m-                                <input type="text" className="form-input" placeholder="Enter faculty ID" />[m
[32m+[m[32m                                <input[m
[32m+[m[32m                                    type="text"[m
[32m+[m[32m                                    name="facultyId"[m
[32m+[m[32m                                    value={faculty.facultyId}[m
[32m+[m[32m                                    onChange={handleChange}[m
[32m+[m[32m                                    className="form-input"[m
[32m+[m[32m                                    required[m
[32m+[m[32m                                />[m
                             </div>[m
[32m+[m
                             <div className="form-group">[m
                                 <label className="form-label">Full Name</label>[m
[31m-                                <input type="text" className="form-input" placeholder="Enter full name" />[m
[32m+[m[32m                                <input[m
[32m+[m[32m                                    type="text"[m
[32m+[m[32m                                    name="fullName"[m
[32m+[m[32m                                    value={faculty.fullName}[m
[32m+[m[32m                                    onChange={handleChange}[m
[32m+[m[32m                                    className="form-input"[m
[32m+[m[32m                                    required[m
[32m+[m[32m                                />[m
                             </div>[m
[32m+[m
                             <div className="form-group">[m
                                 <label className="form-label">Email</label>[m
[31m-                                <input type="email" className="form-input" placeholder="Enter email" />[m
[32m+[m[32m                                <input[m
[32m+[m[32m                                    type="email"[m
[32m+[m[32m                                    name="email"[m
[32m+[m[32m                                    value={faculty.email}[m
[32m+[m[32m                                    onChange={handleChange}[m
[32m+[m[32m                                    className="form-input"[m
[32m+[m[32m                                    required[m
[32m+[m[32m                                />[m
                             </div>[m
[32m+[m
                             <div className="form-group">[m
                                 <label className="form-label">Department</label>[m
[31m-                                <select className="form-select">[m
[32m+[m[32m                                <select[m
[32m+[m[32m                                    name="department"[m
[32m+[m[32m                                    value={faculty.department}[m
[32m+[m[32m                                    onChange={handleChange}[m
[32m+[m[32m                                    className="form-select"[m
[32m+[m[32m                                >[m
[32m+[m[32m                                    <option value="">Select</option>[m
                                     <option>Computer Science</option>[m
                                     <option>Electronics</option>[m
                                     <option>Mechanical</option>[m
                                     <option>Civil</option>[m
                                 </select>[m
                             </div>[m
[32m+[m
                             <div className="form-group">[m
                                 <label className="form-label">Designation</label>[m
[31m-                                <select className="form-select">[m
[32m+[m[32m                                <select[m
[32m+[m[32m                                    name="designation"[m
[32m+[m[32m                                    value={faculty.designation}[m
[32m+[m[32m                                    onChange={handleChange}[m
[32m+[m[32m                                    className="form-select"[m
[32m+[m[32m                                >[m
                                     <option>Professor</option>[m
                                     <option>Associate Professor</option>[m
                                     <option>Assistant Professor</option>[m
                                     <option>Lecturer</option>[m
                                 </select>[m
                             </div>[m
[32m+[m
                             <div className="form-group">[m
                                 <label className="form-label">Specialization</label>[m
[31m-                                <input type="text" className="form-input" placeholder="Enter specialization" />[m
[32m+[m[32m                                <input[m
[32m+[m[32m                                    type="text"[m
[32m+[m[32m                                    name="specialization"[m
[32m+[m[32m                                    value={faculty.specialization}[m
[32m+[m[32m                                    onChange={handleChange}[m
[32m+[m[32m                                    className="form-input"[m
[32m+[m[32m                                />[m
                             </div>[m
                         </div>[m
[31m-                        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>[m
[31m-                            <button type="submit" className="btn btn-primary">Add Faculty</button>[m
[31m-                            <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>[m
[32m+[m
[32m+[m[32m                        <div style={{ display: "flex", gap: "var(--spacing-md)", marginTop: "var(--spacing-lg)" }}>[m
[32m+[m[32m                            <button type="submit" className="btn btn-primary">[m
[32m+[m[32m                                {isEditing ? "Update Faculty" : "Add Faculty"}[m
[32m+[m[32m                            </button>[m
[32m+[m[32m                            <button type="button" className="btn btn-secondary" onClick={resetForm}>[m
[32m+[m[32m                                Cancel[m
[32m+[m[32m                            </button>[m
                         </div>[m
                     </form>[m
                 </div>[m
[36m@@ -84,39 +366,53 @@[m [mconst FacultyManagement = () => {[m
 [m
             <div className="card">[m
                 <div className="table-container">[m
[31m-                    <table className="table">[m
[31m-                        <thead>[m
[31m-                            <tr>[m
[31m-                                <th>Faculty ID</th>[m
[31m-                                <th>Name</th>[m
[31m-                                <th>Email</th>[m
[31m-                                <th>Department</th>[m
[31m-                                <th>Designation</th>[m
[31m-                                <th>Actions</th>[m
[31m-                            </tr>[m
[31m-                        </thead>[m
[31m-                        <tbody>[m
[31m-                            {faculty.map((member) => ([m
[31m-                                <tr key={member.id}>[m
[31m-                                    <td>{member.id}</td>[m
[31m-                                    <td>{member.name}</td>[m
[31m-                                    <td>{member.email}</td>[m
[31m-                                    <td>{member.department}</td>[m
[31m-                                    <td>{member.designation}</td>[m
[31m-                                    <td>[m
[31m-                                        <div style={{ display: 'flex', gap: '0.5rem' }}>[m
[31m-                                            <button className="btn btn-sm btn-secondary">Edit</button>[m
[31m-                                            <button className="btn btn-sm btn-danger">Delete</button>[m
[31m-                                        </div>[m
[31m-                                    </td>[m
[32m+[m[32m                    {loading ? ([m
[32m+[m[32m                        <p>Loading faculty...</p>[m
[32m+[m[32m                    ) : ([m
[32m+[m[32m                        <table className="table">[m
[32m+[m[32m                            <thead>[m
[32m+[m[32m                                <tr>[m
[32m+[m[32m                                    <th>Faculty ID</th>[m
[32m+[m[32m                                    <th>Name</th>[m
[32m+[m[32m                                    <th>Email</th>[m
[32m+[m[32m                                    <th>Department</th>[m
[32m+[m[32m                                    <th>Designation</th>[m
[32m+[m[32m                                    <th>Actions</th>[m
                                 </tr>[m
[31m-                            ))}[m
[31m-                        </tbody>[m
[31m-                    </table>[m
[32m+[m[32m                            </thead>[m
[32m+[m[32m                            <tbody>[m
[32m+[m[32m                                {filteredFaculty.map((member) => ([m
[32m+[m[32m                                    <tr key={member.id}>[m
[32m+[m[32m                                        <td>{member.facultyId}</td>[m
[32m+[m[32m                                        <td>{member.fullName}</td>[m
[32m+[m[32m                                        <td>{member.email}</td>[m
[32m+[m[32m                                        <td>{member.department}</td>[m
[32m+[m[32m                                        <td>{member.designation}</td>[m
[32m+[m[32m                                        <td>[m
[32m+[m[32m                                            <div style={{ display: "flex", gap: "0.5rem" }}>[m
[32m+[m[32m                                                <button[m
[32m+[m[32m                                                    className="btn btn-sm btn-secondary"[m
[32m+[m[32m                                                    onClick={() => handleEdit(member)}[m
[32m+[m[32m                                                >[m
[32m+[m[32m                                                    Edit[m
[32m+[m[32m                                                </button>[m
[32m+[m[32m                                                <button[m
[32m+[m[32m                                                    className="btn btn-sm btn-danger"[m
[32m+[m[32m                                                    onClick={() => handleDelete(member.id)}[m
[32m+[m[32m                                                >[m
[32m+[m[32m                                                    Delete[m
[32m+[m[32m                                                </button>[m
[32m+[m[32m                                            </div>[m
[32m+[m[32m                                        </td>[m
[32m+[m[32m                                    </tr>[m
[32m+[m[32m                                ))}[m
[32m+[m[32m                            </tbody>[m
[32m+[m[32m                        </table>[m
[32m+[m[32m                    )}[m
                 </div>[m
             </div>[m
         </div>[m
     );[m
 };[m
 [m
[31m-export default FacultyManagement;[m
[32m+[m[32mexport default FacultyManagement;[m
\ No newline at end of file[m
