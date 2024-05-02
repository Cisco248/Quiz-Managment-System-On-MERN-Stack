// SavedQuiz.js
const mongoose = require("mongoose");

const savedQuizSchema = new mongoose.Schema({
  saverId: {
    type: String,
    required: true,
  },
  quizIds: [
    {
      type: String,
    },
  ],
});

const SavedQuiz = mongoose.model("SavedQuiz", savedQuizSchema);

module.exports = SavedQuiz;
