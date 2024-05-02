const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
  },
  hostedQuizId: {
    type: String,
    ref: "Quiz",
    required: true,
  },
  joinedPlayers: [
    {
      type: String,
    },
  ],
  playerScores: [
    {
      playerId: {
        type: String,
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
  sessionData: {
    type: Object, // You can define the structure as per your requirement
  },
  totalCorrectAnswers: {
    type: Number,
    default: 0,
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
