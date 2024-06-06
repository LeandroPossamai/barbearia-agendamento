// src/components/BookingForm.js (adicionar validação e tratamento de erros)
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !date || !time) {
            setError('Todos os campos são obrigatórios');
            return;
        }

        try {
            const newBooking = { name, email, date, time };
            await axios.post('http://localhost:5000/api/bookings', newBooking);
            setSuccess('Agendamento realizado com sucesso!');
            setName('');
            setEmail('');
            setDate('');
            setTime('');
            setError('');
        } catch (error) {
            setError('Ocorreu um erro ao enviar o agendamento. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div>
                <label>Nome:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Data:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Hora:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <button type="submit">Agendar</button>
        </form>
    );
};

export default BookingForm;
