// routes/savedQuizRoutes.js
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const savedQuizController = require("../controllers/savedQuizController");

// Route to create a new saved quiz
router.post('/savedQuizzes', authenticateToken, savedQuizController.createSavedQuiz);

// Route to get saved quizzes by saverId
router.get("/savedQuizzes", authenticateToken, savedQuizController.getSavedQuizzesBySaverId);

module.exports = router;
