const Quiz = require('../models/quizModel');

const quizController = {
  getAllQuizzes: async (req, res) => {
    try {
      // Extract User ID from Request Object (Provide by Authentication Token Middleware)
      const userId = req.body.user;
      const quizzes = await Quiz.find({ userId });

        console.log(userId); 
        console.log(quizzes);

      if (!quizzes) {
        res.status(403).json({ error: 'Empty!'})
        console.log(error);
      } // Fetch Quizzes Created by the Logged-In User
      res.json(quizzes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error -1 ' });
      console.log({ message: 'Internal Server Error!', error})
    }
  },

    // GET all quizzes for logged in user
    getAllUserQuizzes: async (req, res) => {
      try {
        // Extract user ID from request object (provided by authenticateToken middleware)
        const userId = req.body.user;
        const quizzes = await Quiz.find({ userId });

        console.log(userId); 
        console.log(quizzes.createdBy);

        if (!quizzes) {
          res.status(403).json({ error: 'Empty!'})
          console.log(error);
        }
        res.json(quizzes); // Fetch quizzes created by the All User
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log({ message: 'Internal Server Error!', error})
      }
    },

  getQuizById: async (req, res) => {
    try {
      const { quizId } = req.params;
      const quiz = await Quiz.findById(quizId);
      if ( quiz ) {
        res.json( quiz );
      } else {
        res.status(404).json({ error: "Quiz Not Found!" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Sever Error!" })
    }
  },

  // Replace the Old Create Quiz Function with the Modified One
  createQuiz: async (req, res) => {
    try {
      // Extract User ID from request Object
      const userId = req.user.id;

      // ADD a console.log Statement to Check the User ID
      console.log("User ID: ", userId);

      // Extract Quiz Data from Request Body
      const { title, questions, timeLimit, category } = req.body;
      console.log("Quiz Title: ", title);

      // Create New Quiz Objects With User ID
      const quiz = new Quiz ({
        title, questions, timeLimit, category, createdBy: userId,
      });

      // Save the Quiz to the Database
      const savedQuiz = await quiz.save();

      res.status(201).json(savedQuiz);
    } catch (error) {
      console.error("Error Saving Quiz: ", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteQuiz: async (req, res) => {
    try {
      const { quizId } = req.params;
      await Quiz.findByIdAndDelete(quizId);
      res.json({ message: "Quiz Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = quizController;
