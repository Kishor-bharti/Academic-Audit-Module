const AuditReports = () => {
    const reports = [
        { id: 1, title: 'Academic Performance Report - Semester 1', type: 'Academic', department: 'Computer Science', date: '2024-01-20', status: 'Published' },
        { id: 2, title: 'Faculty Performance Analysis', type: 'Performance', department: 'All Departments', date: '2024-01-18', status: 'Published' },
        { id: 3, title: 'Course Completion Audit', type: 'Compliance', department: 'Electronics', date: '2024-01-15', status: 'Draft' },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Audit Reports</h1>
                <p className="page-subtitle">View and generate audit reports</p>
            </div>

            <div className="page-actions">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search reports..."
                    />
                </div>
                <button className="btn btn-primary">
                    Generate New Report
                </button>
            </div>

            <div className="grid grid-3" style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div className="stat-card primary">
                    <div className="stat-value">24</div>
                    <div className="stat-label">Total Reports</div>
                </div>
                <div className="stat-card success">
                    <div className="stat-value">18</div>
                    <div className="stat-label">Published</div>
                </div>
                <div className="stat-card warning">
                    <div className="stat-value">6</div>
                    <div className="stat-label">Draft</div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">All Reports</h3>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Report Title</th>
                                <th>Type</th>
                                <th>Department</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => (
                                <tr key={report.id}>
                                    <td>{report.title}</td>
                                    <td><span className="badge badge-primary">{report.type}</span></td>
                                    <td>{report.department}</td>
                                    <td>{report.date}</td>
                                    <td>
                                        <span className={`badge ${report.status === 'Published' ? 'badge-success' : 'badge-warning'}`}>
                                            {report.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button className="btn btn-sm btn-secondary">View</button>
                                            <button className="btn btn-sm btn-primary">Download</button>
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

export default AuditReports;
