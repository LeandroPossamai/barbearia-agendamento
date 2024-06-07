import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Barbearia</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/schedule">Agenda</Link>
                </li>
            </ul>
            <div className="navbar-actions">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
