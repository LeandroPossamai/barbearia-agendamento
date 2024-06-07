const express = require('express');
const router = express.Router();

// Simulação de dados de bookings
const bookings = [
    { _id: '1', name: 'John Doe', email: 'john@example.com', date: '2024-06-01', time: '10:00' },
    { _id: '2', name: 'Jane Doe', email: 'jane@example.com', date: '2024-06-02', time: '11:00' }
];

// Get all bookings
router.get('/', (req, res) => {
    res.json(bookings);
});

// Create a new booking
router.post('/', (req, res) => {
    const newBooking = {
        _id: (bookings.length + 1).toString(),
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

module.exports = router;
