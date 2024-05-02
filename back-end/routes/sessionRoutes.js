const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

// Route to create a new session
router.post('/sessions', sessionController.createSession);

// Update session data
router.put("/sessions", sessionController.updateSession);

// Update session data
router.put("/sessions/:sessionId", sessionController.updatePlayerScore);

// Get session by sessionId
router.get("/sessions/:sessionId", sessionController.getSessionById);

// Delete session by sessionId
router.delete("/sessions/:sessionId", sessionController.deleteSession);

// Get sessions by hostedQuizId
router.get("/sessions/quiz/:quizId", sessionController.getSessionsByQuizId);


module.exports = router;
