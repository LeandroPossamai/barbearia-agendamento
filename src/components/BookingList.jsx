// src/components/BookingList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await axios.get('http://localhost:5000/api/bookings');
            setBookings(response.data);
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h2>Agendamentos</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.name} - {booking.date} às {booking.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
