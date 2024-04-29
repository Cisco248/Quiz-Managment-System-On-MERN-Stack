//HostLandingPage.js
import { useState, useEffect } from "react";
import Styles from "./HostLandingPage.module.css";
import Navibar2 from "../component/Navibar2";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import socket from "./socket"; // Import the socket instance

const HostLandingPage = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { quizId, gamePin } = useParams();
  const [ quiz, setQuiz ] = useState(null);
  const [ gameUrl, setGameUrl ] = useState("");
  const [ numPlayers, setNumPlayers ] = useState(0);
  const [ timeLeft ] = useState(120);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`http://localhost:8000/quizzes/${quizId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuiz(data);
      } catch (error) {
        console.error("Error fetching quiz:", error.message);
      }
    };

    fetchQuiz();
  }, [quizId]);

  useEffect(() => {
    console.log("Generated Pin:", gamePin); // Log the generated game pin
    setGameUrl(`${window.location.origin}/playerslanding/${quizId}/${gamePin}`);
    socket.emit("hostQuiz", gamePin);

    socket.on("playerJoined", (playerId) => {
      console.log("Player ID:", playerId);
      setNumPlayers((numPlayers) => numPlayers + 1);

      // Function to update session in the backend
      const updateSession = async (playerId) => {
        try {
          const response = await fetch("http://localhost:8000/sessions", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming 'token' is the key for the JWT token in local storage
            },
            body: JSON.stringify({
              sessionId: gamePin,
              playerId: playerId,
            }),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log("Session updated:", data.session);
        } catch (error) {
          console.error("Error updating session:", error.message);
        }
      };

      // Update session in the backend
      updateSession(playerId);
      
    });

    // Check if player ID exists in local storage
    const playerId = localStorage.getItem("playerId");
    if (playerId) {
      // Emit 'joinQuiz' event with gamePin and playerId
      socket.emit("joinQuiz", { gamePin, playerId });
    }

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });

    // Create a new session
    const session = {
      sessionId: gamePin,
      hostedQuizId: quizId,
      joinedPlayers: [],
      sessionData: {}, // Add any additional data you want to save for the session
    };
    console.log("Session Data:", session);

    // Post the new session to the back-end
    const postSession = async () => {
      try {
        const response = await fetch("http://localhost:8000/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming 'token' is the key for the JWT token in local storage
          },
          body: JSON.stringify(session),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Session created:", data.session);
      } catch (error) {
        console.error("Error creating session:", error.message);
      }
    };

    postSession();
  }, [gamePin, quizId]);

  // Convert timeLeft to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const copyGameUrlToClipboard = () => {
    navigator.clipboard.writeText(gameUrl);
  };

  // Function to handle click on "Start Now" button
  const handleStartNowClick = async () => {
    socket.emit("startQuiz", gamePin);
    // navigate(`/quizpage/${quizId}`);
  };

  return (
    <div>
      <Navibar2 />
      <div className={Styles.landing_page}>
        <div className={Styles.landing_page_aligment}>

          <div className={Styles.landing_page_row_1}>
            <div className={Styles.players_joined_div}>
              <div className={Styles.players_joined_text}>Players Joined</div>
              <div className={Styles.num_joined_players}>{numPlayers}</div>
            </div>

            <div className={Styles.game_pin_div}>
              <div className={Styles.game_pin_text}>Game Pin</div>
              <div className={Styles.game_pin_no_div}>
                <div className={Styles.game_pin}>{gamePin}</div>
              </div>
            </div>

            <div className={Styles.time_countdown_div}>
              <div className={Styles.time_left_numbers}>{`${minutes} min ${ seconds < 10 ? `0${seconds}` : seconds } sec`}</div>
              <div className={Styles.starts_in_text}>Starts In</div>
            </div>
          </div>

          <div className={Styles.landing_page_row_2}>
            <div className={Styles.pin_link_container}>
              <div className={Styles.link_pin_container}>
                <button className={Styles.link_copy_button} onClick={copyGameUrlToClipboard} ><img className={Styles.link_copy_button_icon} src="https://cdn.animaapp.com/projects/65b90f0683276fd4dbb2229b/releases/65bf591ed422316e119bbcee/img/link-copy-button@2x.png" alt="Link copy button" /></button>
                <img className={Styles.line} alt="Line" src="https://cdn.animaapp.com/projects/65b90f0683276fd4dbb2229b/releases/65bf591ed422316e119bbcee/img/line-13-1.svg" />
                <button className={Styles.link_game_pin_button} onClick={copyGameUrlToClipboard}> {" "} {gameUrl} </button>
              </div>
            </div>

            <div className={Styles.quiz_title_div}>
              <div className={Styles.quiz_title_text}>{quiz?.title}</div>
            </div>
            <div className={Styles.no_questions_container}>
              <div className={Styles.no_questions_div}>
                <p className={Styles.no_of_questions_text}>No. of <span className={Styles.span}> Questions </span></p>
                <div className={Styles.no_questions_number}>{quiz?.questions.length}</div>
              </div>
            </div>
          </div>

          <div className={Styles.landing_page_row_3}>
            <button className={Styles.start_now_button} onClick={handleStartNowClick}><div className={Styles.start_now_text}>Start Now</div></button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HostLandingPage;
