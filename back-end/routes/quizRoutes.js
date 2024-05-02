const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware")
const quizController = require('../controllers/quizController');
const { createQuiz } = require("../controllers/quizController")

// GET all quizzes
router.get('/quizzes', authenticateToken, quizController.getAllQuizzes);

// GET a Single Quiz by ID
router.get("/quizzes/:quizId", quizController.getQuizById);

// POST create a new quiz auhentication M
router.post('/quizzes', authenticateToken, createQuiz);

// DELETE a Quiz
router.delete("/quizzes/:quizId", quizController.deleteQuiz);

module.exports = router;
