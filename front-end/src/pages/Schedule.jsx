import React, { useContext } from 'react';
import { BookingContext } from '../contexts/BookingContext';
import './Schedule.css';

const Schedule = () => {
    const { bookings } = useContext(BookingContext);

    return (
        <div className="schedule-container">
            <h2>Agenda de Agendamentos</h2>
            <div className="schedule">
                {bookings.map((booking, index) => (
                    <div key={index} className="schedule-item">
                        <div className="time">{booking.date} - {booking.time}</div>
                        <div className="name">{booking.name}</div>
                        <div className="email">{booking.email}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
