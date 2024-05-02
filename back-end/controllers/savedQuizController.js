// controllers/savedQuizController.js
const SavedQuiz = require("../models/SavedQuiz");

// Controller to create a new saved quiz
exports.createSavedQuiz = async (req, res) => {
  try {
    // Extract the user ID from req.user
    const saverId = req.user.id;

    const { quizId } = req.body;

    // Find savedQuiz by saverId
    let savedQuiz = await SavedQuiz.findOne({ saverId });
    console.log(`savedQuiz: ${JSON.stringify(savedQuiz)}`);

    // If savedQuiz does not exist, create a new one
    if (!savedQuiz) {
      console.log("savedQuiz does not exist, creating a new one");
      savedQuiz = new SavedQuiz({
        saverId,
        quizIds: [quizId], // Initialize with the provided quizId
      });
      console.log(`new savedQuiz: ${JSON.stringify(savedQuiz)}`);
    } else {
      // If savedQuiz exists, add the quizId to the quizIds array
      savedQuiz.quizIds.push(quizId);
    }

    // Save savedQuiz to database
    await savedQuiz.save();
    console.log("savedQuiz saved successfully");

    res.status(201).json({ success: true, savedQuiz });
  } catch (error) {
    console.log(`Caught an error: ${error.message}`);
    console.error("Error saving quiz:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to get saved quizzes by saverId
exports.getSavedQuizzesBySaverId = async (req, res) => {
  try {
    // Extract the user ID from req.user
    const saverId = req.user.id; // Extract the user ID from req.user

    // Find savedQuiz by saverId
    const savedQuiz = await SavedQuiz.findOne({ saverId });
    console.log(`savedQuiz: ${JSON.stringify(savedQuiz)}`);

    if (!savedQuiz) {
      console.log("savedQuiz not found, sending 404 response");
      return res
        .status(404)
        .json({ success: false, message: "Saved quizzes not found" });
    }

    res.status(200).json({ success: true, quizzes: savedQuiz.quizIds });
  } catch (error) {
    console.log(`Caught an error: ${error.message}`);
    console.error("Error fetching saved quizzes:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
