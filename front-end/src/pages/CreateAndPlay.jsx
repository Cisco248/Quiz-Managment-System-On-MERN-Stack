import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./CreateAndPlay.module.css";

const CreateAndPlay = () => {
  const [createdQuizzes, setCreatedQuizzes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
        console.error("Error Fetching Quizzes: ", error.message);
      }
    };
    fetchQuizzes();
  }, []);

  const handleQuizCardClick = (quiz) => {
    setSelectedQuiz(quiz);
    setIsModalOpen(true);
  };

  // eslint-disable-next-line no-unused-vars
  const handlePlayQuiz = (_quizId) => {
    setIsPlayModalOpen(true);
  };

  const handleJoinQuiz = (gamePin) => {
    console.log("Game Pin: ", gamePin); // Log the game pin
    // Fetch session details using the gamePin (session ID)
    fetchSessionDetails(gamePin);
  };

  const fetchSessionDetails = async (gamePin) => {
    console.log("Fetching Session Details for Game Pin: ", gamePin); // Log before fetching session details
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

  const handleEditQuiz = async (quizId) => {
    try {
      const response = await fetch(`http://localhost:8000/quizzes/${quizId}`, {
        method: "EDIT",
      });
      const data = await response.json();
      console.log(data.message);
      setIsEditModalOpen(false);
      setIsModalOpen(false);
      const updatedQuizzes = selectedQuiz.filter(
        (quiz) => quiz._id !== quizId
      );
      setSelectedQuiz(updatedQuizzes);
    } catch (error) {
      console.error("Error! Editing quiz:", error.message)
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
      console.error("Error! deleting quiz:", error.message);
    }
  };

  // Function to handle navigation to QuizCreatePage
  const navigateToQuizCreatePage = () => {
    navigate("/quizcreatepage/"); // Path to QuizCreatePage
  };

  return (
    <div>
        <div className={Styles.create_and_play_page}>
        <div className={Styles.page_aligement}>
          <div className={Styles.button_container}>
            <button className={Styles.play_button} onClick={() => handlePlayQuiz()}> Play </button>
            <button className={Styles.create_button} onClick={navigateToQuizCreatePage}> Create </button>
          </div>
          <div className={Styles.created_quizzes_title_bar}>
            <div className={Styles.created_quizzes_title_text}>Created Quizzes</div>
          </div>

          <div className={Styles.quiz_card_container}>
            {createdQuizzes.map((quiz) => (
              <div key={quiz._id}>
                <div className={Styles.quiz_card} onClick={() => handleQuizCardClick(quiz)}>
                  <img className={Styles.img} alt="Quiz card tab" src="https://cdn.animaapp.com/projects/65b90f0683276fd4dbb2229b/releases/65bb542e83276fd4dbb2291a/img/quiz-card-tab@2x.png"/>
                  <div className={Styles.text_bar}>
                    <div className={Styles.title}>{quiz.title}</div>
                    <div className={Styles.questionCount}>{`${quiz.questions.length} Questions`}</div>
                    <div className={Styles.timeSet}>{`Time Limit: ${quiz.timeLimit.minutes}m ${quiz.timeLimit.seconds}s`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {isModalOpen && (
            <div className={Styles.modal}>
              <button className={Styles.popup_close_button1} onClick={() => setIsModalOpen(false)}>X</button>
              <div className={Styles.modal_content}>
                <h2 className={Styles.popup_text}>{selectedQuiz.title}</h2>
                <button className={Styles.popup_button} onClick={() => handleHostQuiz(selectedQuiz._id)}> Host Quiz </button>
                <button className={Styles.popup_button} onClick={() => handlePlayQuiz(selectedQuiz._id)}> Play Quiz </button>
                <button className={Styles.popup_button} onClick={() => console.log("Edit Quiz")}> Edit Quiz </button>
                <button className={Styles.popup_button} onClick={() => setIsDeleteModalOpen(true)}> Delete Quiz </button>{" "}
              </div>
            </div>
          )}

          {isPlayModalOpen && (
            <div className={Styles.p_modal}>
              <button className={Styles.popup_close_button2} onClick={() => setIsPlayModalOpen(false)}>X</button>
              <div className={Styles.p_modal_content}>
                <h2 className={Styles.popup_text}>Enter Game Pin to Join Quiz</h2>
                <input className={Styles.popup_input} type="text" placeholder="Enter Game Pin" id="gamePinInput" />
                <button className={Styles.popup_button} onClick={() => handleJoinQuiz( document.getElementById("gamePinInput").value )}> Join Quiz </button>
              </div>
            </div>
          )}

          {isEditModalOpen && (
            <div className={Styles.modal}>
              <button className={Styles.popup_close_button2} onClick={() => setIsEditModalOpen(false)}>X</button>
              <div className={Styles.modal_content}>
                <h2 className={Styles.popup_text}>Confirm Edit?</h2>
                <p className={Styles.popup_text}>Are you sure you want to Edit this quiz?</p>
                <button className={Styles.popup_button} onClick={() => handleEditQuiz(selectedQuiz._id)}> Yes!, Edit </button>
                <button className={Styles.popup_button} onClick={() => setIsEditModalOpen(false)}> No!, Go Back </button>
              </div>
            </div>
          )}

          {isDeleteModalOpen && (
            <div className={Styles.modal}>
              <button className={Styles.popup_close_button2} onClick={() => setIsDeleteModalOpen(false)}>X</button>
              <div className={Styles.modal_content}>
                <h2 className={Styles.popup_text}>Confirm Delete?</h2>
                <p className={Styles.popup_text}>Are you sure you want to Delete this quiz?</p>
                <button className={Styles.popup_button} onClick={() => handleDeleteQuiz(selectedQuiz._id)}> Yes!, Delete </button>
                <button className={Styles.popup_button} onClick={() => setIsDeleteModalOpen(false)}> No!, Go Back </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAndPlay;
