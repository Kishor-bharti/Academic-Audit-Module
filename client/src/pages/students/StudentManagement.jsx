import { useState } from 'react';

const StudentManagement = () => {
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const students = [
        { id: 'STU001', name: 'Alice Johnson', email: 'alice@example.com', department: 'Computer Science', semester: '6th' },
        { id: 'STU002', name: 'Bob Smith', email: 'bob@example.com', department: 'Electronics', semester: '4th' },
        { id: 'STU003', name: 'Carol Williams', email: 'carol@example.com', department: 'Mechanical', semester: '8th' },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Student Management</h1>
                <p className="page-subtitle">Manage student records and information</p>
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
                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancel' : 'Add Student'}
                </button>
            </div>

            {showForm && (
                <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <div className="card-header">
                        <h3 className="card-title">Add New Student</h3>
                    </div>
                    <form>
                        <div className="grid grid-2">
                            <div className="form-group">
                                <label className="form-label">Student ID</label>
                                <input type="text" className="form-input" placeholder="Enter student ID" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-input" placeholder="Enter full name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Department</label>
                                <select className="form-select">
                                    <option>Computer Science</option>
                                    <option>Electronics</option>
                                    <option>Mechanical</option>
                                    <option>Civil</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Semester</label>
                                <select className="form-select">
                                    <option>1st</option>
                                    <option>2nd</option>
                                    <option>3rd</option>
                                    <option>4th</option>
                                    <option>5th</option>
                                    <option>6th</option>
                                    <option>7th</option>
                                    <option>8th</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Year</label>
                                <input type="text" className="form-input" placeholder="e.g., 2024" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
                            <button type="submit" className="btn btn-primary">Add Student</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="card">
                <div className="table-container">
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
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.department}</td>
                                    <td>{student.semester}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button className="btn btn-sm btn-secondary">Edit</button>
                                            <button className="btn btn-sm btn-danger">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentManagement;
