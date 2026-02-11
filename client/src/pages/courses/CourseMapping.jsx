import { useState } from 'react';

const CourseMapping = () => {
    const [showForm, setShowForm] = useState(false);

    const courses = [
        { code: 'CS101', name: 'Introduction to Programming', department: 'Computer Science', credits: 4, faculty: 'Dr. John Smith' },
        { code: 'EC201', name: 'Digital Electronics', department: 'Electronics', credits: 3, faculty: 'Dr. Sarah Johnson' },
        { code: 'ME301', name: 'Thermodynamics', department: 'Mechanical', credits: 4, faculty: 'Dr. Michael Brown' },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Course Mapping</h1>
                <p className="page-subtitle">Manage courses and faculty assignments</p>
            </div>

            <div className="page-actions">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search courses..."
                    />
                </div>
                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancel' : 'Add Course'}
                </button>
            </div>

            {showForm && (
                <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <div className="card-header">
                        <h3 className="card-title">Add New Course</h3>
                    </div>
                    <form>
                        <div className="grid grid-2">
                            <div className="form-group">
                                <label className="form-label">Course Code</label>
                                <input type="text" className="form-input" placeholder="e.g., CS101" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Course Name</label>
                                <input type="text" className="form-input" placeholder="Enter course name" />
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
                                <label className="form-label">Credits</label>
                                <input type="number" className="form-input" placeholder="Enter credits" min="1" max="6" />
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
                                <label className="form-label">Assign Faculty</label>
                                <select className="form-select">
                                    <option value="">Select Faculty</option>
                                    <option>Dr. John Smith</option>
                                    <option>Dr. Sarah Johnson</option>
                                    <option>Dr. Michael Brown</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea className="form-textarea" placeholder="Enter course description"></textarea>
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
                            <button type="submit" className="btn btn-primary">Add Course</button>
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
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Department</th>
                                <th>Credits</th>
                                <th>Faculty</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.code}>
                                    <td><span className="badge badge-primary">{course.code}</span></td>
                                    <td>{course.name}</td>
                                    <td>{course.department}</td>
                                    <td>{course.credits}</td>
                                    <td>{course.faculty}</td>
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

export default CourseMapping;
