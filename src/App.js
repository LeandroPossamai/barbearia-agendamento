import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import BookingForm from './components/BookingForm'; // Importar o formulário de agendamento
import Login from './pages/Login';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (credentials) => {
        // Simulação de login bem-sucedido
        console.log('Logging in with', credentials);
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/bookings">Agendamentos</Link>
                    </li>
                    <li>
                        <Link to="/booking-form">Agendar Serviço</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
                <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
                <Route path="/bookings" element={isAuthenticated ? <Bookings /> : <Navigate to="/login" />} />
                <Route path="/booking-form" element={isAuthenticated ? <BookingForm /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
