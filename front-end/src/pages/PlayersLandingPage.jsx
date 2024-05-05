import { useState, useEffect } from "react";
import Style from "./CSS/PlayersLandingPage.module.css";
import { useNavigate } from "react-router-dom";
import socket from "./socket";
import Navibar2 from "../component/Navibar2";

const PlayersLandingPage = () => {
  const navigate = useNavigate();
  const [quizId, setQuizId] = useState(null);
  const [gamePin, setGamePin] = useState(null);
  const [session, setSession] = useState(null);
  const [gameUrl, setGameUrl] = useState("");
  const [numPlayers] = useState(0);
  const [timeLeft] = useState(120);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Extract game pin from the URL path only if it contains "/playerslanding/"
    if (window.location.pathname.includes("/playerslanding/")) {
      const pathParts = window.location.pathname.split("/");
      const gamePin = pathParts[pathParts.length - 1]; // Assuming the game pin is the last part of the URL path
      if (gamePin) {
        setGamePin(gamePin);
        // Check if the game pin was provided via the URL or not
        if (pathParts.length === 4) {
          // Game pin provided via URL, join the quiz
          joinQuiz(gamePin);
        }
      } else {
        // No game pin found in the URL
        alert("No game pin provided in the URL");
        navigate("/"); // Redirect to home or error page
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const joinQuiz = (gamePin) => {
    console.log("Joining quiz with game pin:", gamePin);
    let playerId = localStorage.getItem("playerId");
    if (!playerId) {
      setIsModalOpen(true);
    } else {
      checkGamePin(gamePin, playerId);
    }
  };

  // Send the game pin to the server to check if session is available
  const checkGamePin = (gamePin, playerId) => {
    socket.emit("checkGamePin", gamePin);

    socket.on("gamePinStatus", (data) => {
      if (data.gamePinExists) {
        socket.emit("joinQuiz", { gamePin, playerId });
      } else {
        alert("No current quiz session for this game pin");
        navigate("/");
      }
    });
  };

  const handleModalSubmit = (nickname) => {
    localStorage.setItem("playerId", nickname);
    setIsModalOpen(false);
    checkGamePin(gamePin, nickname);
  };

  useEffect(() => {
    // Convert game pin to session ID (assuming gamePin is the session ID)
    const sessionId = gamePin;
    console.log("Session Id:", sessionId);

    // Fetch session details using session ID (game pin)
    const fetchSessionDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/sessions/${sessionId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSession(data.session);
        console.log("Session Details:", data.session);
        // Extract quizId from session and set it
        const quizId = data.session.hostedQuizId._id; // Assuming quizId is stored in hostedQuizId._id
        setQuizId(quizId);
        console.log("Quiz Idddd:", quizId);
      } catch (error) {
        console.error("Error fetching session details:", error.message);
      }
    };

    fetchSessionDetails();
  }, [gamePin]);

  useEffect(() => {
    setGameUrl(`${window.location.origin}/playerslanding/${quizId}/${gamePin}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamePin]);

  useEffect(() => {
    // Listen for 'startQuiz' event from the server
    socket.on("startQuiz", () => {
      console.log("Received start quiz event", quizId, gamePin); // Ensure this log appears
      navigate(`/quizpage/${quizId}/${gamePin}`);
    });
  }, [quizId, gamePin, navigate]);

  // Convert timeLeft to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const copyGameUrlToClipboard = () => {
    navigator.clipboard.writeText(gameUrl);
  };

  return (
    <div>
      <Navibar2 />
      <div className={Style.player_landing_page}>
        <div className={Style.player_landing_page_aligment}>
          <div className={Style.top_item_layout}>
            <div className={Style.players_joined_div}>
              <div className={Style.players_joined_text}>Players Joined</div>
              <div className={Style.num_joined_players}>{numPlayers}</div>
            </div>

            <div className={Style.game_pin_div}>
              <div className={Style.game_pin_text}>Game Pin</div>
              <div className={Style.game_pin_no_div}>
                <img className={Style.img} alt="Vector" src="https://cdn.animaapp.com/projects/65b90f0683276fd4dbb2229b/releases/65bf591ed422316e119bbcee/img/vector-7@2x.png"/>
                <div className={Style.game_pin}>{gamePin}</div>
              </div>
            </div>

            <div className={Style.time_countdown_div}>
              <div className={Style.countdown_no_div}>
                <h2 className={Style.starts_in_text}>Starts In</h2>
                <div className={Style.time_left_numbers}>{`${minutes} min ${seconds < 10 ? `0${seconds}` : seconds} sec`}</div>
              </div>
            </div>
          </div>
          <div className={Style.p_link_game_pin_div}>
            <div className={Style.p_overlap_2}>
              <div className={Style.p_link_pin_button}>
                <button className={Style.p_link_copy_button} onClick={copyGameUrlToClipboard}>
                  <img className={Style.p_link_img} src="/copy-link.png" alt="copy button"/>
                  <p className={Style.p_link} onClick={copyGameUrlToClipboard}>{" "}{gameUrl}</p>
                </button>
              </div>
            </div>
          </div>
          <div className={Style.bottom_layout}>
            <div className={Style.quiz_title_div}>
              <div className={Style.quiz_title_text}>{session?.hostedQuizId.title}</div>
            </div>
            <div className={Style.no_questions_div}>
              <div className={Style.no_of_questions_text}>
                <p className={Style.no_question}>No. of <span className={Style.span}>questions</span></p>
              </div>
              <div className={Style.no_questions_number}>{session?.hostedQuizId.questions.length}</div>
            </div>
            <div className={Style.start_session_button_container}>
              <button className={Style.start_session_button}>Start</button>
            </div>
          </div>

          {isModalOpen && (
            <div className={Style.popup_modal}>
              <div className={Style.popup_content}> 
                <h2 className={Style.popup_text_name}>Ener a Nickname</h2>
                <form onSubmit={(e) => { e.preventDefault(); 
                  handleModalSubmit(e.target.elements.nickname.value);}}>
                  <input className={Style.nickname} placeholder="Name Here..." required />
                  <div className={Style.enter_button_container}>
                    <button className={Style.enter_button} type="submit">Enter</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayersLandingPage;
