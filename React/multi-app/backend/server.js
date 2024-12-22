const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors'); // Importe o cors

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use variáveis de ambiente

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Middleware para CORS
app.use(cors({
  origin: 'http://localhost:5173', // URL do seu frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Armazenamento em memória para usuários
const users = [];
let nextUserId = 1;

// Função para gerar token JWT
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

app.get('/users', (req, res) => {
  res.json(users);
});

// Rota para registro de novos usuários
app.post('/register', (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) return res.status(400).json({ message: 'name and password are required' });

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: nextUserId++, name, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

// Rota para login e geração de token
app.post('/login', (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) return res.status(400).json({ message: 'name and password are required' });

  const user = users.find(user => user.name === name);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user.id);
  res.json({ token });
});

// Middleware para verificar o token JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Rota protegida que requer autenticação
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.user.userId });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
