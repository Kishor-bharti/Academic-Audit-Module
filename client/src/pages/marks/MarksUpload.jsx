import { useState } from 'react';

const MarksUpload = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        courseCode: '',
        examType: 'Internal',
        marksObtained: '',
        maxMarks: '',
        semester: '',
        year: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Marks data:', formData);
        // Handle form submission
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Marks Upload</h1>
                <p className="page-subtitle">Upload student examination marks</p>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Upload Student Marks</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-2">
                        <div className="form-group">
                            <label className="form-label">Student ID</label>
                            <input
                                type="text"
                                name="studentId"
                                className="form-input"
                                placeholder="Enter student ID"
                                value={formData.studentId}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Course Code</label>
                            <select
                                name="courseCode"
                                className="form-select"
                                value={formData.courseCode}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Course</option>
                                <option value="CS101">CS101 - Introduction to Programming</option>
                                <option value="EC201">EC201 - Digital Electronics</option>
                                <option value="ME301">ME301 - Thermodynamics</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Exam Type</label>
                            <select
                                name="examType"
                                className="form-select"
                                value={formData.examType}
                                onChange={handleChange}
                                required
                            >
                                <option value="Internal">Internal</option>
                                <option value="External">External</option>
                                <option value="Assignment">Assignment</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Semester</label>
                            <select
                                name="semester"
                                className="form-select"
                                value={formData.semester}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Semester</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                                <option value="5th">5th</option>
                                <option value="6th">6th</option>
                                <option value="7th">7th</option>
                                <option value="8th">8th</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Marks Obtained</label>
                            <input
                                type="number"
                                name="marksObtained"
                                className="form-input"
                                placeholder="Enter marks obtained"
                                min="0"
                                max="100"
                                value={formData.marksObtained}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Maximum Marks</label>
                            <input
                                type="number"
                                name="maxMarks"
                                className="form-input"
                                placeholder="Enter maximum marks"
                                min="0"
                                max="100"
                                value={formData.maxMarks}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Academic Year</label>
                            <input
                                type="text"
                                name="year"
                                className="form-input"
                                placeholder="e.g., 2024-2025"
                                value={formData.year}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Exam Date</label>
                            <input
                                type="date"
                                className="form-input"
                                required
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
                        <button type="submit" className="btn btn-primary">Upload Marks</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </form>
            </div>

            <div className="card" style={{ marginTop: 'var(--spacing-xl)' }}>
                <div className="card-header">
                    <h3 className="card-title">Recent Uploads</h3>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Course</th>
                                <th>Exam Type</th>
                                <th>Marks</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>STU001</td>
                                <td>CS101</td>
                                <td>Internal</td>
                                <td>85/100</td>
                                <td>2024-01-15</td>
                                <td><span className="badge badge-success">Verified</span></td>
                            </tr>
                            <tr>
                                <td>STU002</td>
                                <td>EC201</td>
                                <td>External</td>
                                <td>78/100</td>
                                <td>2024-01-14</td>
                                <td><span className="badge badge-success">Verified</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MarksUpload;
