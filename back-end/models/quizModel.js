const mongoose = require('mongoose');

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
    hours: Number,
    minutes: Number,
    seconds: Number,
  },
  createBy: {
    // New Field to Store the User ID
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User Model
  }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
