const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser') 
const app = express();

// Database Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('🙂 Database Connected!'))
    .catch((err) => console.log('😞 Database Not Connected!', err));

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', require('./routes/authRoutes'));

// Routes
app.use('/', require('./routes/quizRoutes'));

const PORT = process.env.PORT || 8000; // Use process.env.PORT for dynamic port binding
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} 🇱🇰`));
