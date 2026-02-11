const Settings = () => {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Settings</h1>
                <p className="page-subtitle">Manage your account and application settings</p>
            </div>

            <div className="grid grid-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Profile Settings</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-input" defaultValue="John Doe" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" defaultValue="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Role</label>
                                <input type="text" className="form-input" defaultValue="Admin" disabled />
                            </div>
                            <button type="submit" className="btn btn-primary">Update Profile</button>
                        </form>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Change Password</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label className="form-label">Current Password</label>
                                <input type="password" className="form-input" placeholder="Enter current password" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">New Password</label>
                                <input type="password" className="form-input" placeholder="Enter new password" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Confirm New Password</label>
                                <input type="password" className="form-input" placeholder="Confirm new password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Change Password</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginTop: 'var(--spacing-xl)' }}>
                <div className="card-header">
                    <h3 className="card-title">Application Settings</h3>
                </div>
                <div className="card-body">
                    <div className="grid grid-2">
                        <div className="form-group">
                            <label className="form-label">Institution Name</label>
                            <input type="text" className="form-input" defaultValue="ABC University" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Academic Year</label>
                            <input type="text" className="form-input" defaultValue="2024-2025" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Default Semester</label>
                            <select className="form-select">
                                <option>1st</option>
                                <option>2nd</option>
                                <option selected>3rd</option>
                                <option>4th</option>
                                <option>5th</option>
                                <option>6th</option>
                                <option>7th</option>
                                <option>8th</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Time Zone</label>
                            <select className="form-select">
                                <option>UTC</option>
                                <option selected>IST (UTC+5:30)</option>
                                <option>EST (UTC-5)</option>
                                <option>PST (UTC-8)</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
                        Save Settings
                    </button>
                </div>
            </div>

            <div className="card" style={{ marginTop: 'var(--spacing-xl)' }}>
                <div className="card-header">
                    <h3 className="card-title">Notifications</h3>
                </div>
                <div className="card-body">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked />
                            <span>Email notifications for new student enrollments</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked />
                            <span>Email notifications for marks uploads</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="checkbox" />
                            <span>Email notifications for audit report generation</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked />
                            <span>System maintenance notifications</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
