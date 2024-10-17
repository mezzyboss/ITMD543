/* const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Serve static files from the public directory
app.use(express.static('midterm'));
app.use(bodyParser.json());

const users = []; // Simple in-memory user store

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    if (users.some(u => u.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, email, password: hashedPassword });

    res.status(201).send('User registered');
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).send('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).send('Invalid username or password');
    }

    const token = jwt.sign({ username: user.username }, 'your_jwt_secret');
    res.send({ token });
});

app.get('/order-history', (req, res) => {
    // Secure this endpoint with JWT
    res.send('Order history');
});

app.listen(3000, () => console.log('Server running on port 3000'));
 */

const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('midterm_gamehub'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
