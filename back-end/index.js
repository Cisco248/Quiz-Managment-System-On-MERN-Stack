const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const http = require("http");
const socketIo = require("socket.io");
const { disconnect } = require('process');
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

// User Routes
app.use('/', require('./routes/authRoutes'));

// Quiz Routes
app.use('/', require('./routes/quizRoutes'));

// Session Route
app.use("/", require("./routes/sessionRoutes")); 

const PORT = process.env.PORT || 8000; // Use process.env.PORT for dynamic port binding
const server = http.createServer(app);
const io = socketIo( server, {
    cors: {
        origin: "http://localhost:5173",
        methods: [ "GET", "POST" ],
    },
});

let activeGamePins = [];
io.on("connection", (socket) => {
    console.log("🙂 New User Connected! ");

    socket.on("hostQuiz", (gamePin) => {
        socket.join(gamePin);
        activeGamePins.push(gamePin);
    });

    socket.on("joinQuiz", ({ gamePin, playerId }) => {
        socket.join(gamePin);
        io.io(gamePin).emit("playerJoined", playerId);
    });

    socket.on("checkGamePin", (gamePin) => {
        if (activeGamePins.includes(gamePin)) {
            socket.emit("gamePinStatus", { gamePinExists: true });
        } else {
            socket.emit("gamePinStatus", { gamePinExists: false });
        }
    });

    socket.on("startQuiz", (gamePin) => {
        console.log(`startQuiz event emitted with gamePin: ${gamePin}`);
        io.io(gamePin).emit("startQuiz");
    });

    socket.on("disconnect", () => {
        console.log("😞 User Disconnected! ")
    });
});

server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} 🇱🇰`));
