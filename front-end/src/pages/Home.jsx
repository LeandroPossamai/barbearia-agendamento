import React, { useState, useContext } from 'react';
import { BookingContext } from '../contexts/BookingContext';
import './Home.css';

const Home = () => {
    const { addBooking } = useContext(BookingContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !date || !time) {
            setError('Todos os campos são obrigatórios');
            return;
        }

        const newBooking = { name, email, date, time };
        addBooking(newBooking);
        setSuccess('Agendamento realizado com sucesso!');
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setError('');
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Bem-vindo à Barbearia</h1>
                <p>Agende seu horário conosco!</p>
                <form onSubmit={handleSubmit} className="booking-form">
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                    <div className="form-group">
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Data:</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Hora:</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Agendar</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
