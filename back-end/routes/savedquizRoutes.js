// routes/savedQuizRoutes.js
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const savedQuizController = require("../controllers/savedQuizController");

// Route to create a new saved quiz
router.post('/savedQuizzes', authenticateToken, savedQuizController.createSavedQuiz);

// Route to get saved quizzes by saverId
router.get("/savedQuizzes", authenticateToken, savedQuizController.getSavedQuizzesBySaverId);

// Route to delete a quiz from saved quizzes
router.delete("/savedQuizzes/:quizId", authenticateToken, savedQuizController.deleteQuizFromSavedQuizzes);

// Route to delete all quizzes from saved quizzes
router.delete("/savedQuizzes", authenticateToken, savedQuizController.deleteAllQuizzesFromSavedQuizzes);


module.exports = router;
