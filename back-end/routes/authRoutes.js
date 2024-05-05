const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, test, loginUser, fetchUsers } = require('../controllers/authControllers');

// Middleware
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:5173'
};

router.use(cors(corsOptions));

// Routes
router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser)

module.exports = router;