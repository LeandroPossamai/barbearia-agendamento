import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Schedule from './pages/Schedule';
import { BookingProvider } from './contexts/BookingContext';
import Navbar from './components/Navbar';  // Import the Navbar component

const App = () => (
    <BookingProvider>
        <Router>
            <Navbar />  {/* Add the Navbar component */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </Router>
    </BookingProvider>
);

export default App;
