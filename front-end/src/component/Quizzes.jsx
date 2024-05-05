import { useState, useEffect } from "react";
import "./Quizzes.css";
import { useNavigate } from "react-router-dom";
import mathImg from "../../public/maths.png";
import technologyImg from "../../public/technology.png";
import scienceImg from "../../public/science.png";
import historyImg from "../../public/history.png";
import businessImg from "../../public/business.png";
import financeImg from "../../public/finance.png";
import defaultImg from "../../public/maths.png";

const Quizzes = () => {
  const [createdQuizzes, setCreatedQuizzes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("http://localhost:8000/quizzes", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming 'token' is the key for the JWT token in local storage
          },
        });
        const data = await response.json();
        setCreatedQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error.message);
      }
    };

    fetchQuizzes();
  }, []);

  const handleQuizCardClick = (quiz) => {
    setSelectedQuiz(quiz);
    setIsModalOpen(true);
  };

  const handlePlayQuiz = () => {
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

  // In your Library component
  const handleSave = async (quizId) => {
    try {
      const response = await fetch("http://localhost:8000/savedQuizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming 'token' is the key for the JWT token in local storage
        },
        body: JSON.stringify({
          quizId: quizId,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Quiz saved:", data.savedQuiz);
      alert("Quiz Saved Successfully");
    } catch (error) {
      console.error("Error saving quiz:", error.message);
    }
  };

  const handleDeleteQuiz = async (quizId) => {
    try {
      const response = await fetch(`http://localhost:8000/quizzes/${quizId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data.message);
      setIsDeleteModalOpen(false);
      setIsModalOpen(false);
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
                    <div className="questionCount">{`${quiz.questions.length} Questions`}</div>
                    <div className="timeSet">{`Time Limit: ${quiz.timeLimit.minutes}m ${quiz.timeLimit.seconds}s`}</div>
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
                <button onClick={() => handleSave(selectedQuiz._id)}>
                  Save to Library
                </button>
                <button onClick={() => setIsDeleteModalOpen(true)}>
                  Delete Quiz
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

export default Quizzes;
