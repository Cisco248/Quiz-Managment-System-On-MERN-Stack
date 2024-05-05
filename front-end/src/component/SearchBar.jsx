import { useState } from "react";
import Style from "../component/CSS/SearchBar.module.css";
// import { useNavigate } from "react-router-dom";
// import mathImg from "../../public/maths.png";
// import technologyImg from "../../public/technology.png";
// import scienceImg from "../../public/science.png";
// import historyImg from "../../public/history.png";
// import businessImg from "../../public/business.png";
// import financeImg from "../../public/finance.png";
// import defaultImg from "../../public/maths.png";

const SearchQuizzes = (checkPropTypes) => {
  const [ setCreatedQuizzes] = useState([]);

  const [searchTerm, setSearchTerm] = useState(""); // Add this line
  // const navigate = useNavigate();

  const SearchQuizzes = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/quizzes?search=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch quizzes");
      }
      const quizzesData = await response.json();
      setCreatedQuizzes(quizzesData);
    } catch (error) {
      console.error("Error fetching quizzes:", error.message);
    }
  };

  // const handleJoinQuiz = (gamePin) => {
  //   console.log("Game Pin:", gamePin); // Log the game pin
  //   // Fetch session details using the gamePin (session ID)
  //   fetchSessionDetails(gamePin);
  // };

  // const fetchSessionDetails = async (gamePin) => {
  //   console.log("Fetching session details for game pin:", gamePin); // Log before fetching session details
  //   try {
  //     const response = await fetch(`http://localhost:8000/sessions/${gamePin}`);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     const quizId = data.session.hostedQuizId._id;
  //     console.log("QuizId:", quizId);
  //     // Navigate to PlayersLandingPage with quizId and gamePin
  //     console.log(
  //       "Navigating to PlayersLandingPage with QuizId and GamePin:",
  //       quizId,
  //       gamePin
  //     ); // Log before navigating
  //     navigate(`/playerslanding/${quizId}/${gamePin}`);
  //   } catch (error) {
  //     console.error("Error fetching session details:", error.message);
  //     alert("No current quiz session for this Game pin");
  //   }
  // };

  // const getCategoryImage = (category) => {
  //   switch (category) {
  //     case "Math":
  //       return mathImg;
  //     case "Information technology":
  //       return technologyImg;
  //     case "Science":
  //       return scienceImg;
  //     case "History":
  //       return historyImg;
  //     case "Business":
  //       return businessImg;
  //     case "Finance":
  //       return financeImg;
  //     default:
  //       return defaultImg; // Replace 'defaultImg' with the path to your default image
  //   }
  // };
 
  const search_bar_component = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }

  const search_bar_aligment ={}
  
  const search_bar_container = {}
  
  const search_bar_section = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px'
  }

  return (
    <div>
      <div style={search_bar_component}>
        <div style={search_bar_aligment}>
          <div style={search_bar_container}>
            <div style={search_bar_section}>
              <input className={Style.search_box}  type="search" placeholder="Search Quizzes" onChange={(e) => setSearchTerm(e.target.value)} />
              <div>
                <button className={Style.search_button} onClick={() => {SearchQuizzes(); checkPropTypes.onSearch();}}>{" "}{/* Call the onSearch function when the Search button is clicked */}Search</button>
              </div>
            </div>
          </div>

           {/* <div className="quiz-card-container ">
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
          </div>  */}

          {/* {isModalOpen && (
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
                // Open delete confirmation modal 
              </div>
            </div>
          )} */}

          {/* {isPlayModalOpen && (
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
          )} */}

          {/* {isDeleteModalOpen && (
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
          )} */}

        </div>
      </div>
    </div>
  );
};

export default SearchQuizzes;
