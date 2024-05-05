/* eslint-disable no-unused-vars */
import Slider from '../component/image_slider/Slider'
import Style from './CSS/Home.module.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Public Folder Category Images Import
import mathImg from "/maths.png";
import technologyImg from "/technology.png";
import scienceImg from "/science.png";
import historyImg from "/history.png";
import businessImg from "/business.png";
import financeImg from "/finance.png";
import defaultImg from "/maths.png";

function Home() {

    const [ createdQuizzes, setCreatedQuizzes ] = useState([]);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isPlayModalOpen, setIsPlayModalOpen ] = useState(false);
    const [ selectedQuiz, setSelectedQuiz ] = useState(null);
    const [ isDeleteModalOpen, setIsDeleteModalOpen ] = useState(false);
    const [ session, setSession ] = useState(null);
    const [ users, setUsers ] = useState([]);
    const [ quizzes, setQuizzes ] = useState([]);
    const navigate = useNavigate();

      // Fetch All the Quizzes
    useEffect(() => {

      const token = localStorage.getItem('token');
      axios.get('/quizzes', {
      headers: {
      Authorization: token
      }
      })
      .then(response => {
          setQuizzes(response.data);
        })
        .catch(error => {
        console.error('Error Fetching Profile: ', error)
        });

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

          const fetchUsers = async () => {
            try {
              const response = await axios.get('/users'); // fetch the user data
              setUsers(response.data);
              console.log(response);
            } catch (error) {
              console.log( 'Server Not Found!', error)
            }
          };
          fetchUsers();
          fetchQuizzes();
    }, []);

    useEffect(() => {
      const fetchSessionDetails = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/sessions/${310255}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setSession(data.session);
        } catch (error) {
          console.error("Error fetching session details:", error.message);
        }
      };
  
      // Call fetchSessionDetails immediately and then every 5 seconds
      fetchSessionDetails();
      const intervalId = setInterval(fetchSessionDetails, 5000);
  
      // Clean up the interval on unmount
      return () => clearInterval(intervalId);
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
      }
    
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
      <div className={Style.home_page}>
        <div className={Style.slider}>
            <Slider className={Style.slider}/>
        </div>
        <div className={Style.tag_button}>
            <a className={Style.box1} href='/maintaince'>Science</a>
            <a className={Style.box2} href='/maintaince'>Maths</a>
            <a className={Style.box3} href='/maintaince'>Biology</a>
            <a className={Style.box4} href='/maintaince'>Technology</a>
            <a className={Style.box5} href='/maintaince'>Music</a>
            <a className={Style.box6} href='/maintaince'>Social Studies</a>
            <a className={Style.box7} href='/maintaince'>Economics</a>
        </div>
        <div className={Style.home_page_container}>
            <div className={Style.home_page_container_row1}>
                <div className={Style.discover_component}>
                    <div className={Style.discover}>
                        <h3 className={Style.discover_title}> Discover </h3>{" "}
                    </div>
                    <div className={Style.quiz_section}>
                        <div className={Style.quiz_section_style}>
                            <div className={Style.quiz_card_container}>
                                {createdQuizzes.map((quiz) => (
                                    <div key={quiz._id}>
                                        <div className={Style.quiz_card} onClick={() => handleQuizCardClick(quiz)}>
                                            <img className={Style.quiz_card_img} alt="Quiz-Card" src={getCategoryImage(quiz.category)}/>
                                            <div className={Style.quiz_card_text_bar}>
                                            <h3 className={Style.quiz_card_title}>{quiz.title}</h3>
                                            <h4 className={Style.quiz_card_question_count}>{`${quiz.questions.length} Questions`}</h4>
                                            <h4 className={Style.quiz_card_time_set}>{`Time Limit: ${quiz.timeLimit.minutes}m ${quiz.timeLimit.seconds}s`}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                
          {isModalOpen && (
            <div className={Style.modal}>
              <div className={Style.modal_content}>
                <button1 className={Style.popup_close_button1} onClick={() => setIsModalOpen(false)}>X</button1>
                <h2 className={Style.popup_text}>{selectedQuiz.title}</h2>
                <button className={Style.popup_button} onClick={() => handleHostQuiz(selectedQuiz._id)}>
                  Host Quiz
                </button>
                <button className={Style.popup_button} onClick={() => handlePlayQuiz(selectedQuiz._id)}>
                  Play Quiz
                </button>
                <button className={Style.popup_button} onClick={() => handleSave(selectedQuiz._id)}>
                  Save to Library
                </button>
                <button className={Style.popup_button} onClick={() => setIsDeleteModalOpen(true)}>
                  Delete Quiz
                </button>{" "}
                {/* Open delete confirmation modal */}
              </div>
            </div>
          )}

          {isPlayModalOpen && (
            <div className={Style.modal}>
              <div className={Style.modal_content}>
                <button1 className={Style.popup_close_button2} onClick={() => setIsPlayModalOpen(false)}>X</button1>
                <h2 className={Style.popup_text}>Enter Game Pin to Join Quiz</h2>
                <input className={Style.popup_input}
                  type="text"
                  placeholder="Enter Game Pin"
                  id="gamePinInput"
                />
                <button className={Style.popup_button}
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
            <div className={Style.modal}>
              <div className={Style.modal_content}>
              <button1 className={Style.popup_close_button2} onClick={() => setIsPlayModalOpen(false)}>X</button1>
                <h2 className={Style.popup_text}>Confirm Delete</h2>
                <p className={Style.popup_text}>Are you sure you want to delete this quiz?</p>
                <button className={Style.popup_button} onClick={() => handleDeleteQuiz(selectedQuiz._id)}>
                  Yes, Delete
                </button>
                <button className={Style.popup_button} onClick={() => setIsDeleteModalOpen(false)}>
                  No, Go Back
                </button>
              </div>
            </div>
          )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.home_page_container_row2}>
                <div className={Style.users} onClick={() => navigate('/connect')}>
                    <div className={Style.user_title_box}>
                        <h2 className={Style.user_title}>Users</h2>
                    </div>
                    <div className={Style.users_name_box}>
                        { users.map((user) => ( <h3 className={Style.users_name} key={user._id}>{ user.name }</h3> ))}
                    </div>
                </div>
                <div className={Style.leaderboard}>
                    <div className={Style.leaderboard_title_box}>
                        <a href='/leaderboard' className={Style.leaderboard_title_link}>
                            <h2 className={Style.leaderboard_title}>Leaderboard</h2>
                        </a>
                    </div>
                    <div className={Style.user_leaderboard_box}>
                        { session && session.playerScores.sort((a,b) => b.score - a.score).map((playerScore, index) => ( <div className={Style.user_leaderboard_layout} key={index}><h3 className={Style.user_leaderboard}>{ playerScore.playerId }</h3><p className={ Style.user_score }> Score: { playerScore.score }</p></div>))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
