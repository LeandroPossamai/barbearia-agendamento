const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Simulação de banco de dados de usuários
const users = [
    { email: 'lele@gmail.com', password: '12345' }  // exemplo de usuário
];

// Rota de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Importar e usar o roteador de bookings
const bookingsRouter = require('./routes/bookings');
app.use('/api/bookings', bookingsRouter);

// Rota de teste
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
