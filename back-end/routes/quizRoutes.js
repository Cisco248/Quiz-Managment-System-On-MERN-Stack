const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// GET all quizzes
router.get('/quizzes', quizController.getAllQuizzes);

// POST create a new quiz
router.post('/quizzes', quizController.createQuiz);

module.exports = router;
