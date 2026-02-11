import { useState } from 'react';

const FacultyManagement = () => {
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const faculty = [
        { id: 'FAC001', name: 'Dr. John Smith', email: 'john.smith@example.com', department: 'Computer Science', designation: 'Professor' },
        { id: 'FAC002', name: 'Dr. Sarah Johnson', email: 'sarah.j@example.com', department: 'Electronics', designation: 'Associate Professor' },
        { id: 'FAC003', name: 'Dr. Michael Brown', email: 'michael.b@example.com', department: 'Mechanical', designation: 'Assistant Professor' },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Faculty Management</h1>
                <p className="page-subtitle">Manage faculty members and their information</p>
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
                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancel' : 'Add Faculty'}
                </button>
            </div>

            {showForm && (
                <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <div className="card-header">
                        <h3 className="card-title">Add New Faculty</h3>
                    </div>
                    <form>
                        <div className="grid grid-2">
                            <div className="form-group">
                                <label className="form-label">Faculty ID</label>
                                <input type="text" className="form-input" placeholder="Enter faculty ID" />
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
                                <label className="form-label">Designation</label>
                                <select className="form-select">
                                    <option>Professor</option>
                                    <option>Associate Professor</option>
                                    <option>Assistant Professor</option>
                                    <option>Lecturer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Specialization</label>
                                <input type="text" className="form-input" placeholder="Enter specialization" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
                            <button type="submit" className="btn btn-primary">Add Faculty</button>
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
                                <th>Faculty ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculty.map((member) => (
                                <tr key={member.id}>
                                    <td>{member.id}</td>
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
                                    <td>{member.department}</td>
                                    <td>{member.designation}</td>
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

export default FacultyManagement;
