//QuizPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./QuizPage.css";
import socket from "./socket";

const QuizPage = () => {
  const { quizId, gamePin } = useParams();
  console.log("Quiz ID:", quizId);
  const [quiz, setQuiz] = useState(null);
  const [session, setSession] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [score, setScore] = useState(0); // Add a new state for the score
  const [timeLeft, setTimeLeft] = useState(null); // Add a new state for time left
  const [timerId, setTimerId] = useState(null);
  const navigate = useNavigate();

  const playerId = localStorage.getItem("playerId");

  useEffect(() => {
    const fetchSessionDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/sessions/${gamePin}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched session data:", data); // Log fetched data
        setSession(data.session);
      } catch (error) {
        console.error("Error fetching session details:", error.message);
      }
    };

    fetchSessionDetails();
  }, [gamePin]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`http://localhost:8000/quizzes/${quizId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched quiz data:", data); // Log fetched data
        setQuiz(data);
      } catch (error) {
        console.error("Error fetching quiz:", error.message);
      }
    };

    fetchQuiz();
  }, [quizId]);

  useEffect(() => {
    console.log("useEffect called");
    const sessionId = gamePin;
    console.log("Session Id sss:", sessionId);

    const updatePlayerScore = async () => {
      console.log("updatePlayerScore called");
      try {
        console.log("Trying to fetch data");
        const response = await fetch(
          `http://localhost:8000/sessions/${sessionId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sessionId,
              playerId,
              score,
            }),
          }
        );

        console.log("Fetch completed");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Updated player score:", data);
      } catch (error) {
        console.error("Error updating player score:", error.message);
      }
    };

    if (quiz && currentQuestionIndex === quiz.questions.length) {
      console.log("Quiz check:", quiz);
      updatePlayerScore();
      navigate(`/leaderboard/${gamePin}`);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setIsAnswerSelected(false);
    if (quiz) {
      setTimeLeft(quiz.timeLimit.minutes * 60 + quiz.timeLimit.seconds); // Set time left for each question

      // Clear the previous timer
      if (timerId) {
        clearInterval(timerId);
      }

      // Start a new timer
      const id = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      setTimerId(id);
    }
  }, [currentQuestionIndex, quiz]);

  useEffect(() => {
    // When timeLeft reaches 0, move to the next question
    if (timeLeft === 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswerSelected(false); // Reset isAnswerSelected when moving to the next question
    }
  }, [timeLeft]);

  const currentQuestion =
    quiz && quiz.questions && quiz.questions[currentQuestionIndex]
      ? quiz.questions[currentQuestionIndex]
      : null;

  if (!quiz || !currentQuestion) {
    return <div>Loading...</div>;
  }

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(`Answer${answerIndex}`);
    setCorrectAnswer(currentQuestion.correct);
    setIsAnswerSelected(true); // Set isAnswerSelected to true when an answer is selected
    console.log("Selected answer:", `Answer${answerIndex}`); // Log selected answer
    console.log("Correct answer:", currentQuestion.correct); // Log correct answer

    // Update the score if the answer is correct
    if (`Answer${answerIndex}` === currentQuestion.correct) {
      setScore((prevScore) => prevScore + 100 / quiz.questions.length);
    }

    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswerSelected(false); // Reset isAnswerSelected when moving to the next question
    }, 5000); // Move to next question after 2 seconds
  };

  return (
    <div className="main-div">
      <div className="div">
        <div className="quiz-page-div">
          <div className="question-box-div">
            <div className="question-box-background">
              <div className="topics-div">
                <div className="question-count">
                  Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </div>
                <div className="score-text">Score: {Math.round(score)}</div>
                <div className="time-left-text">
                  Time Left: {Math.floor(timeLeft / 60)} Min {timeLeft % 60} Sec
                </div>
                <div className="quiz-title-text">{quiz.title}</div>
              </div>
              <p className="question-text">{currentQuestion.question}</p>

              {currentQuestion.answers.map((answer, index) => (
                <div
                  key={index}
                  className={`answer-box-${index} ${
                    `Answer${index}` === selectedAnswer
                      ? `Answer${index}` === correctAnswer
                        ? "correct"
                        : "incorrect"
                      : `Answer${index}` === correctAnswer
                      ? "correct"
                      : ""
                  }`}
                  onClick={
                    !isAnswerSelected ? () => handleAnswerClick(index) : null
                  }
                >
                  <div className="answer-tag">{index}.</div>
                  <div className="answer-tab">
                    <div className="answer-text">{answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
