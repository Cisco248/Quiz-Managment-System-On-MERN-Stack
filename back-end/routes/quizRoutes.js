const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const quizController = require("../controllers/quizController");
const { createQuiz } = require("../controllers/quizController");

// GET all quizzes 
router.get("/quizzes", quizController.getAllQuizzes);

// GET all quizzes for logged in user
router.get("/quizzes/user", authenticateToken, quizController.getAllUserQuizzes);

// GET a single quiz by ID
router.get("/quizzes/:quizId", quizController.getQuizById);

// POST create a new quiz with authentication middleware
router.post("/quizzes", authenticateToken, createQuiz);

// DELETE a quiz
router.delete("/quizzes/:quizId", quizController.deleteQuiz);

module.exports = router;
