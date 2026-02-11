const Dashboard = () => {
    const stats = [
        { label: 'Total Students', value: '1,234', color: 'primary' },
        { label: 'Total Faculty', value: '89', color: 'secondary' },
        { label: 'Active Courses', value: '156', color: 'success' },
        { label: 'Audit Reports', value: '42', color: 'warning' },
    ];

    const recentActivities = [
        { action: 'New student enrolled', user: 'John Doe', time: '2 hours ago' },
        { action: 'Marks uploaded for CS101', user: 'Dr. Smith', time: '4 hours ago' },
        { action: 'Audit report generated', user: 'Admin', time: '1 day ago' },
        { action: 'New course added', user: 'Dr. Johnson', time: '2 days ago' },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Dashboard</h1>
                <p className="page-subtitle">Welcome to Academic Audit Management System</p>
            </div>

            <div className="dashboard-stats">
                {stats.map((stat, index) => (
                    <div key={index} className={`stat-card ${stat.color}`}>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title">Recent Activity</h2>
                </div>
                <div className="card">
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>User</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentActivities.map((activity, index) => (
                                    <tr key={index}>
                                        <td>{activity.action}</td>
                                        <td>{activity.user}</td>
                                        <td>{activity.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title">Quick Actions</h2>
                </div>
                <div className="grid grid-3">
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <div className="card-header">
                            <h3 className="card-title">Upload Marks</h3>
                        </div>
                        <div className="card-body">
                            Upload student marks for courses and examinations
                        </div>
                    </div>
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <div className="card-header">
                            <h3 className="card-title">Add Student</h3>
                        </div>
                        <div className="card-body">
                            Register new students to the system
                        </div>
                    </div>
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <div className="card-header">
                            <h3 className="card-title">Generate Report</h3>
                        </div>
                        <div className="card-body">
                            Create audit reports for academic analysis
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
