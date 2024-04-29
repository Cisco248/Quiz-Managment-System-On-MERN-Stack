//HostLandingPage.js
import React, { useState, useEffect } from "react";
import "./HostLandingPage.css";
import Navibar2 from "../component/Navibar2";
//import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import socket from "./socket"; // Import the socket instance

const HostLandingPage = () => {
  const navigate = useNavigate();
  const { quizId, gamePin } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [gameUrl, setGameUrl] = useState("");
  const [numPlayers, setNumPlayers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

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
  }, [gamePin]);

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
      <div className="main-div">
        <div className="div">
          <div className="players-joined-div">
            <div className="players-joined-text">Players Joined</div>
            <div className="numjoined-players">{numPlayers}</div>
          </div>

          <div className="game-pin-div">
            <div className="game-pin-text">Game Pin</div>
            <div className="game-pin-no-div">
              <img
                className="img"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/65b90f0683276fd4dbb2229b/releases/65bf591ed422316e119bbcee/img/vector-7@2x.png"
              />
              <div className="game-pin">{gamePin}</div>
            </div>
          </div>

          <div className="time-countdown-div">
            <div className="countdown-no-div">
              <div className="time-left-numbers">{`${minutes} min ${
                seconds < 10 ? `0${seconds}` : seconds
              } sec`}</div>
            </div>
            <div className="starts-in-text">Starts In</div>
          </div>

          <div className="link-game-pin-div">
            <div className="overlap-2">
              <div className="link-pin-button">
                <img
                  className="line"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/65b90f0683276fd4dbb2229b/releases/65bf591ed422316e119bbcee/img/line-13-1.svg"
                />
                <button
                  className="link-copy-button"
                  onClick={copyGameUrlToClipboard} // Attach the function here
                >
                  <img
                    className="link-copy-button-icon"
                    src="https://cdn.animaapp.com/projects/65b90f0683276fd4dbb2229b/releases/65bf591ed422316e119bbcee/img/link-copy-button@2x.png"
                    alt="Link copy button"
                  />
                </button>
              </div>
              <button
                className="link-game-pin-button"
                onClick={copyGameUrlToClipboard}
              >
                {" "}
                {gameUrl}
              </button>
            </div>
          </div>

          <div className="quiz-title-div">
            <div className="quiz-title-text">{quiz?.title}</div>
          </div>
          <div className="no-questions-div">
            <p className="no-of-questions-text">
              <span className="span">No. of </span>
              <span className="span">questions</span>
            </p>
            <div className="no-questions-number">{quiz?.questions.length}</div>
          </div>
          <div>
            <button className="start-now-button" onClick={handleStartNowClick}>
              <div className="start-now-text">Start Now</div>
            </button>
          </div>

          <div className="copyright">
            <p className="quizzify-quiz-system">
              Quizzify - Quiz System Project © 2023. Design by Team 56
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostLandingPage;
