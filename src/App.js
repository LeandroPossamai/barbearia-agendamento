// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Bookings from './pages/Bookings';

const App = () => (
    <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bookings">Agendamentos</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Bookings />} />
        </Routes>
    </Router>
);

export default App;
