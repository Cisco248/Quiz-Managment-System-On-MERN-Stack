const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: String,
  category: String, 
  questions: [
    {
      question: String,
      answers: [String],
      correct: String,
    },
  ],
  timeLimit: {
    minutes: Number,
    seconds: Number,
  },
  createdBy: {
    // New field to store the user ID
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
