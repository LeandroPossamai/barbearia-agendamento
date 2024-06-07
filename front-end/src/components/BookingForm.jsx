import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css'; // Importando o arquivo CSS

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
        <div className="booking-form-container">
            <form className="booking-form" onSubmit={handleSubmit}>
                <h2>Agendar Serviço</h2>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <div className="form-group">
                    <label>Nome:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Data:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Hora:</label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <button type="submit">Agendar</button>
            </form>
        </div>
    );
};

export default BookingForm;
