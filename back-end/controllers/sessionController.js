const Session = require("../models/sessionModel");

// Controller to create a new quiz session
exports.createSession = async (req, res) => {
  try {
    // Extract data from request body
    const { sessionId, hostedQuizId } = req.body;

    // Create new session
    const session = new Session({
      sessionId,
      hostedQuizId,
      joinedPlayers: [], // Empty array initially
      sessionData: {}, // Empty object initially
    });

    // Save session to database
    await session.save();

    res.status(201).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to update session data
exports.updateSession = async (req, res) => {
  console.log("Updating session with request body:", req.body); // Log the request body when updating the session
  try {
    // Extract data from request body
    const { sessionId, playerId } = req.body;

    // Find session by sessionId
    const session = await Session.findOne({ sessionId });

    // Check if playerId already exists in joinedPlayers
    if (!session.joinedPlayers.includes(playerId)) {
      // playerId does not exist in joinedPlayers, update data
      const updatedSession = await Session.findOneAndUpdate(
        { sessionId },
        {
          $push: {
            joinedPlayers: playerId,
            playerScores: { playerId, score: 0 }, // Assuming you also want to initialize playerScores
          },
        },
        { new: true }
      );

      res.status(200).json({ success: true, session: updatedSession });
    } else {
      // playerId already exists in joinedPlayers, do not update
      res
        .status(200)
        .json({ success: true, message: "Player already joined", session });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to update player score data
exports.updatePlayerScore = async (req, res) => {
  console.log("updatePlayerScore exported function called");
  try {
    const { sessionId, playerId, score } = req.body;
    console.log("Request body:", req.body);
    const session = await Session.findOne({ sessionId });
    console.log("Session found:", session);
    if (!session) {
      console.error(`Session with ID ${sessionId} not found`);
      return;
    }
    const playerScore = session.playerScores.find(
      (ps) => ps.playerId === playerId
    );
    console.log("Player score found:", playerScore);
    if (!playerScore) {
      console.error(
        `Player with ID ${playerId} not found in session ${sessionId}`
      );
      return;
    }
    const updatedSession = await Session.findOneAndUpdate(
      { sessionId, "playerScores.playerId": playerId },
      {
        $set: {
          "playerScores.$.score": score,
        },
      },
      { new: true }
    );
    console.log("Updated session:", updatedSession);
    res.status(200).json({ success: true, session: updatedSession });
  } catch (error) {
    console.error("Error in exported function:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to get session by sessionId
exports.getSessionById = async (req, res) => {
  try {
    // Extract sessionId from request params
    const { sessionId } = req.params;

    // Find session by sessionId
    const session = await Session.findOne({ sessionId }).populate(
      "hostedQuizId joinedPlayers"
    );

    if (!session) {
      return res
        .status(404)
        .json({ success: false, message: "Session not found" });
    }

    res.status(200).json({ success: true, session });
  } catch (error) {
    console.error("Error fetching session:", error); // Log the error
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to delete session by sessionId
exports.deleteSession = async (req, res) => {
  try {
    // Extract sessionId from request params
    const { sessionId } = req.params;

    // Find session by sessionId and delete
    await Session.findOneAndDelete({ sessionId });

    res
      .status(200)
      .json({ success: true, message: "Session deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to get sessions by hostedQuizId
exports.getSessionsByQuizId = async (req, res) => {
  try {
    // Extract quizId from request params
    const { quizId } = req.params;
    console.log("Quiz Ids: ", quizId);

    // Find sessions by hostedQuizId
    const sessions = await Session.find({ hostedQuizId: quizId });

    if (!sessions) {
      return res
        .status(404)
        .json({ success: false, message: "Sessions not found" });
    }

    res.status(200).json({ success: true, sessions });
  } catch (error) {
    console.error("Error fetching sessions:", error); // Log the error
    res.status(500).json({ success: false, error: error.message });
  }
};

