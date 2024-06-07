import React, { createContext, useState } from 'react';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);

    const addBooking = (booking) => {
        setBookings([...bookings, booking]);
    };

    return (
        <BookingContext.Provider value={{ bookings, addBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export { BookingContext, BookingProvider };
