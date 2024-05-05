import { useState, useEffect } from "react";
import "./SavedQuizzes.css";
import { useNavigate } from "react-router-dom";
import mathImg from "../../public/maths.png";
import technologyImg from "../../public/technology.png";
import scienceImg from "../../public/science.png";
import historyImg from "../../public/history.png";
import businessImg from "../../public/business.png";
import financeImg from "../../public/finance.png";
import defaultImg from "../../public/maths.png";

const SavedQuizzes = () => {
  const [createdQuizzes, setCreatedQuizzes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedQuizzes = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/savedQuizzes`, // No userId in the URL
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Add this line
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched saved quizzes:", data.quizzes); // Log fetched quizzes

        // Fetch the quiz objects for the saved quiz IDs
        const quizResponses = await Promise.all(
          data.quizzes.map((quizId) =>
            fetch(`http://localhost:8000/quizzes/${quizId}`)
          )
        );
        const quizData = await Promise.all(
          quizResponses.map((res) => res.json())
        );

        setCreatedQuizzes(quizData); // Set the quizzes state
      } catch (error) {
        console.error("Error fetching saved quizzes:", error.message);
      }
    };

    fetchSavedQuizzes();
  }, []);

  const handleQuizCardClick = (quiz) => {
    setSelectedQuiz(quiz);
    setIsModalOpen(true);
  };

  const handlePlayQuiz = (_quizId) => {
    setIsPlayModalOpen(true);
  };

  const handleJoinQuiz = (gamePin) => {
    console.log("Game Pin:", gamePin); // Log the game pin
    // Fetch session details using the gamePin (session ID)
    fetchSessionDetails(gamePin);
  };

  const fetchSessionDetails = async (gamePin) => {
    console.log("Fetching session details for game pin:", gamePin); // Log before fetching session details
    try {
      const response = await fetch(`http://localhost:8000/sessions/${gamePin}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const quizId = data.session.hostedQuizId._id;
      console.log("QuizId:", quizId);
      // Navigate to PlayersLandingPage with quizId and gamePin
      console.log(
        "Navigating to PlayersLandingPage with QuizId and GamePin:",
        quizId,
        gamePin
      ); // Log before navigating
      navigate(`/playerslanding/${quizId}/${gamePin}`);
    } catch (error) {
      console.error("Error fetching session details:", error.message);
      alert("No current quiz session for this Game pin");
    }
  };

  const handleHostQuiz = async (quizId) => {
    const quiz = createdQuizzes.find((q) => q._id === quizId);
    console.log("Quiz:", quiz);

    // Always generate a new game pin when hosting a quiz
    const gamePin = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated Pin:", gamePin);

    navigate(`/hostlanding/${quizId}/${gamePin}`);
  };

  const handleDeleteQuiz = async (quizId) => {
    try {
      // Delete the quiz from the database
      const response = await fetch(
        `http://localhost:8000/savedQuizzes/${quizId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data.message);

      // Delete the quiz from the state
      const updatedQuizzes = createdQuizzes.filter(
        (quiz) => quiz._id !== quizId
      );
      setCreatedQuizzes(updatedQuizzes);
    } catch (error) {
      console.error("Error deleting quiz:", error.message);
    }
  };

  const getCategoryImage = (category) => {
    switch (category) {
      case "Math":
        return mathImg;
      case "Information technology":
        return technologyImg;
      case "Science":
        return scienceImg;
      case "History":
        return historyImg;
      case "Business":
        return businessImg;
      case "Finance":
        return financeImg;
      default:
        return defaultImg; // Replace 'defaultImg' with the path to your default image
    }
  };

  return (
    <div>
      <div className="main-div">
        <div className="c-div-2">
          <div className="c-quiz-card-container ">
            {createdQuizzes.map((quiz) => (
              <div key={quiz._id}>
                <div
                  className="quiz-card"
                  onClick={() => handleQuizCardClick(quiz)}
                >
                  <img
                    className="img"
                    alt="Quiz card tab"
                    src={getCategoryImage(quiz.category)}
                  />
                  <div className="text-bar">
                    <div className="title">{quiz.title}</div>
                    <div className="questionCount">{`${
                      quiz.questions?.length || 0
                    } Questions`}</div>
                    <div className="timeSet">{`Time Limit: ${
                      quiz.timeLimit?.minutes || 0
                    }m ${quiz.timeLimit?.seconds || 0}s`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <button1 onClick={() => setIsModalOpen(false)}>X</button1>
                <h2>{selectedQuiz.title}</h2>
                <button onClick={() => handleHostQuiz(selectedQuiz._id)}>
                  Host Quiz
                </button>
                <button onClick={() => handlePlayQuiz(selectedQuiz._id)}>
                  Play Quiz
                </button>
                <button onClick={() => handleSave(selectedQuiz._id)}>Save to Library</button>
                <button onClick={() => setIsDeleteModalOpen(true)}>
                  Delete Saved Quiz
                </button>{" "}
                {/* Open delete confirmation modal */}
              </div>
            </div>
          )}

          {isPlayModalOpen && (
            <div className="p-modal">
              <div className="p-modal-content">
                <button1 onClick={() => setIsPlayModalOpen(false)}>X</button1>
                <h2>Enter Game Pin to Join Quiz</h2>
                <input
                  type="text"
                  placeholder="Enter game pin"
                  id="gamePinInput"
                />
                <button
                  onClick={() =>
                    handleJoinQuiz(
                      document.getElementById("gamePinInput").value
                    )
                  }
                >
                  Join Quiz
                </button>
              </div>
            </div>
          )}

          {isDeleteModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <h2>Confirm Delete</h2>
                <p>Are you sure you want to delete this quiz?</p>
                <button onClick={() => handleDeleteQuiz(selectedQuiz._id)}>
                  Yes, Delete
                </button>
                <button onClick={() => setIsDeleteModalOpen(false)}>
                  No, Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedQuizzes;
