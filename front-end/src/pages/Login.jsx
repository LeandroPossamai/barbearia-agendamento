import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    // eslint-disable-next-line
    const [email, setEmail] = useState('');
    // eslint-disable-next-line
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticação aqui
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="login-button-container">
                    <button type="submit" className="login-button">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
