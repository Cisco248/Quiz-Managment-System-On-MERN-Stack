const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, test } = require('../controllers/authControllers');

// Middleware
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:5173'
};

router.use(cors(corsOptions));

// Routes
router.get('/', test);
router.post('/register', registerUser);

module.exports = router;
