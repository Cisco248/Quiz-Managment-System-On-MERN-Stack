const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const Session = require("./models/sessionModel");


// Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("🙂 Database Connected!"))
  .catch((err) => console.log("😞 Database Not Connected!", err));

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Add your client's origin here
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/quizRoutes"));
app.use("/", require("./routes/sessionRoutes")); // Include session routes
app.use("/", require("./routes/savedquizRoutes")); // Include session routes
app.use("/", require("./routes/profileRoutes"))

const PORT = process.env.PORT; // Use process.env.PORT for dynamic port binding
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Add your client's origin here
    methods: ["GET", "POST"],
  },
});

let activeGamePins = [];

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("hostQuiz", (gamePin) => {
    socket.join(gamePin);
    activeGamePins.push(gamePin);
  });

  socket.on("joinQuiz", ({ gamePin, playerId }) => {
    socket.join(gamePin);
    io.to(gamePin).emit("playerJoined", playerId);
  });

  socket.on("checkGamePin", (gamePin) => {
    if (activeGamePins.includes(gamePin)) {
      socket.emit("gamePinStatus", { gamePinExists: true });
    } else {
      socket.emit("gamePinStatus", { gamePinExists: false });
    }
  });

  socket.on("startQuiz", (gamePin) => {
    console.log(`startQuiz event emitted with gamePin: ${gamePin}`); // Add this line
    io.to(gamePin).emit("startQuiz");
  });

  socket.on("correctAnswer", async ({ playerId, gamePin }) => {
    const session = await Session.findOne({ sessionId: gamePin });
    const playerScore = session.playerScores.find(
      (ps) => ps.playerId === playerId
    );
    if (playerScore) {
      await Session.findOneAndUpdate(
        { sessionId: gamePin, "playerScores.playerId": playerId },
        {
          $inc: {
            totalCorrectAnswers: 1,
          },
        }
      );
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} 🇱🇰`));
