const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
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
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
