import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import '../../styles/navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-left">
                    <h2 className="navbar-brand">Academic Audit</h2>
                </div>

                <div className="navbar-right">
                    <div className="user-menu">
                        <button
                            className="user-button"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <div className="user-avatar">
                                {user?.fullName?.charAt(0).toUpperCase() || 'U'}
                            </div>
                            <div className="user-info">
                                <div className="user-name">{user?.fullName || 'User'}</div>
                                <div className="user-role">{user?.role || 'Student'}</div>
                            </div>
                            <svg
                                className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <>
                                <div
                                    className="dropdown-overlay"
                                    onClick={() => setDropdownOpen(false)}
                                />
                                <div className="dropdown-menu">
                                    <div className="dropdown-header">
                                        <div className="dropdown-welcome">WELCOME!</div>
                                        <div className="dropdown-user-name">{user?.fullName}</div>
                                        <div className="dropdown-user-email">{user?.email}</div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <button className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        My Profile
                                    </button>
                                    <button className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                        Settings
                                    </button>
                                    <button className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                        Activity
                                    </button>
                                    <button className="dropdown-item">
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>
                                        Support
                                    </button>
                                    <div className="dropdown-divider" />
                                    <button className="dropdown-item logout" onClick={handleLogout}>
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                        </svg>
                                        Logout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
