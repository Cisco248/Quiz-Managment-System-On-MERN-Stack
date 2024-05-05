import { useState, useEffect } from "react";
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

  const quiz_card_component = {
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
  };

  const quiz_card_component_layout = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const quiz_card_container = {
    padding: '200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: '40px'
  };

  const quiz_card = {
    display: 'flex',
    cursor: 'pointer'
  };

  const quiz_card_img = {
    height: '300px',
    width: '300px',
    borderRadius: '50px'
  };

  const quiz_card_text_bar = {
    padding: '10px 0px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '200px',
    left: '-300px',
    height:' 100px',
    width: '300px',
    borderRadius: '0px 0px 50px 50px',
    gap: '5px',
  };

  const quiz_card_title = {
    color: '#2b2b2b',
    fontSize: '20px',
    fontWeight: 'normal'
  };

  const quiz_card_question_count = {
    color: '#6e6e6e',
    fontSize: '16px',
    fontWeight: '550'
  };

  const quiz_card_time_set = {
    color: '#6e6e6e',
    fontSize: '16px',
    fontWeight: '550',
  };

  const modal = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '20px'
  };

  const modal_content = {
    backgroundColor:' rgba(255, 255, 255, 0.856)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 300px',
    borderRadius: '25px',
    gap: '30px'
  };

  const popup_close_button1 = {
    padding: '10px 20px',
    borderRadius: '50px',
    backgroundColor: '#fff',
    fontSize: '30px',
    fontFamily: 'Poppins, Helvetica',
    fontStyle: 'normal',
    fontWeight: '800',
    cursor: 'pointer',
  };

  const popup_close_button2 = {
    padding: '10px 20px',
    borderRadius: '50px',
    backgroundColor: '#fff',
    fontSize: '30px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontStyle: 'normal',
    fontWeight: '800',
    cursor: 'pointer',
  };

  const popup_button = {
    fontFamily: 'Helvetica',
    fontSize: '18px',
    fontWeight: '600',
    padding: '10px 20px',
    marginBottom: '18px',
    borderRadius: '8px',
    borderWidth: '1px',
    backgroundColor: '#a7a5a5',
    color: '#000000',
    cursor: 'pointer',
    border: 'none',
  };

  const popup_text = {
    textAlign: 'center',
    fontFamily: 'Poppins, Helvetica',
    fontSize: '30px',
    marginTop: '15px',
  };

  const popup_input = {
    padding: '10px 40px',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Helvetica',
    border: '3px solid #000000',
    borderRadius: '8px'
  };

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

  // eslint-disable-next-line no-unused-vars
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

  const handleSaveQuiz = async (quizId) => {
    try {
      // Save the quiz from the database
      const response = await fetch(
        `http://localhost:8000/savedQuizzes/${quizId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data.message);

      // Save the quiz from the state
      const NewQuizzes = createdQuizzes.filter(
        (quiz) => quiz._id !== quizId
      );
      setCreatedQuizzes(NewQuizzes);
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
      <div style={ quiz_card_component }>
        <div style={ quiz_card_component_layout }>
          <div style={ quiz_card_container }>
            { createdQuizzes.map((quiz) => (
              <div key={ quiz._id }>
                <div style={ quiz_card } onClick={() => handleQuizCardClick(quiz)}>
                    <img style={ quiz_card_img } alt="Quiz-Card" src={getCategoryImage(quiz.category)}/>
                    <div style={ quiz_card_text_bar }>
                      <h3 style={ quiz_card_title }>{quiz.title}</h3>
                      <h4 style={ quiz_card_question_count}>{ `${quiz.questions?.length || 0 } Questions` }</h4>
                      <h4 style={ quiz_card_time_set }>{ `Time Limit: ${ quiz.timeLimit?.minutes || 0 }m ${ quiz.timeLimit?.seconds || 0 }s` }</h4>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div style={ modal }>
              <div style={ modal_content }>
                <button1 style={ popup_close_button1 } onClick={() => setIsModalOpen(false) }>X</button1>
                <h2 style={ popup_text }>{ selectedQuiz.title }</h2>
                <button style={ popup_button } onClick={() => handleHostQuiz(selectedQuiz._id)}>Host Quiz</button>
                <button style={ popup_button } onClick={() => handlePlayQuiz(selectedQuiz._id)}>Play Quiz</button>
                <button style={ popup_button } onClick={() => handleSaveQuiz(selectedQuiz._id)}>Save to Library</button>
                <button style={ popup_button } onClick={() => setIsDeleteModalOpen(true)}>Delete Quiz</button>{" "}
              </div>
            </div>
          )}

          {isPlayModalOpen && (
            <div style={modal}>
              <div style={modal_content}>
                <button1 style={popup_close_button2} onClick={() => setIsPlayModalOpen(false)}>X</button1>
                <h2 style={popup_text}>Enter Game Pin to Join Quiz</h2>
                <input style={popup_input}
                  type="text"
                  placeholder="Enter Game Pin"
                  id="gamePinInput"
                />
                <button style={popup_button}
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
            <div style={modal}>
              <div style={modal_content}>
              <button1 style={popup_close_button2} onClick={() => setIsPlayModalOpen(false)}>X</button1>
                <h2 style={popup_text}>Confirm Delete</h2>
                <p style={popup_text}>Are you sure you want to delete this quiz?</p>
                <button style={popup_button} onClick={() => handleDeleteQuiz(selectedQuiz._id)}>
                  Yes, Delete
                </button>
                <button style={popup_button} onClick={() => setIsDeleteModalOpen(false)}>
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

