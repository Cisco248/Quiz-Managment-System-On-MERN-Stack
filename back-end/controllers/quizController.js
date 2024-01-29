const Quiz = require('../models/quizModel');

const quizController = {
  getAllQuizzes: async (req, res) => {
    try {
      const quizzes = await Quiz.find();
      res.json(quizzes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createQuiz: async (req, res) => {
    const { questions, timeLimit } = req.body;

    try {
      const newQuiz = new Quiz({
        questions,
        timeLimit,
      });

      const savedQuiz = await newQuiz.save();
      res.json(savedQuiz);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = quizController;
