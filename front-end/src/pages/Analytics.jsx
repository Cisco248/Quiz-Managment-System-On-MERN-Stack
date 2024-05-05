/* eslint-disable no-unused-vars */
//Analytics.jsx
import Style from "./CSS/Analytics.module.css";
import { useState, useEffect } from "react";

function Analytics() {
  const [quizzes, setQuizzes] = useState([]);
  const [sessions, setSessions] = useState([]); // Add this line
  const [searchTerm, setSearchTerm] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false); // Add this line
  const [currentSession, setCurrentSession] = useState(null); // Add this line

  const openModal = (session) => {
    setCurrentSession(session);
    setModalIsOpen(true);
  };

  const handleSearch = () => {
    // Filter sessions based on searchTerm
    const filteredSessions = sessions.filter((session) =>
      session.quizTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update sessions state with filtered sessions
    setSessions(filteredSessions);
  };

  // Fetch quizzes created by the logged-in user when the component mounts
  useEffect(() => {
    const fetchUserQuizzes = async () => {
      try {
        const response = await fetch(`http://localhost:8000/quizzes/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // replace `token` with the actual token
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user quizzes");
        }
        const quizzes = await response.json();
        setQuizzes(quizzes);

        // Fetch sessions for each quiz
        for (const quiz of quizzes) {
          console.log(quiz);
          const sessionResponse = await fetch(
            `http://localhost:8000/sessions/quiz/${quiz._id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`, // replace `token` with the actual token
              },
            }
          );
          if (!sessionResponse.ok) {
            throw new Error("Failed to fetch sessions");
          }
          const sessionData = await sessionResponse.json();
          console.log(sessionData);
          setSessions((prevSessions) => [
            ...prevSessions,
            ...sessionData.sessions.map((session) => ({
              ...session,
              quizTitle: quiz.title,
              questionCount: quiz.questions.length,
            })),
          ]); // Add this line
        }
      } catch (error) {
        console.error("Error fetching user quizzes:", error.message);
      }
    };

    fetchUserQuizzes();
  }, []);

  return (
    <div>
      <div className={Style.Analytics_page}>
        <div className={Style.Analytics_page_div}>
          <div className={Style.page_title}>
            <h1 className={Style.maintitle_text}>Quiz Analytics</h1>
          </div>
          <div className={Style.search_bar}>
            <div className={Style.search_section}>
              <input className={Style.search_box} type="search" placeholder="Search Quizzes" onChange={(e) => setSearchTerm(e.target.value)}/>
              <button className={Style.search_button} onClick={handleSearch}>Search</button>
            </div>
          </div>

          <div className={Style.session_section}>
            <div className={Style.session_section_style}>
              <h3 className={Style.topic_text}>All Reports for Finished Quiz Sessions</h3>
              <h2 className={Style.topic_text2}>Click to view Reports</h2>
              <div className={Style.session_section_wrap}>{sessions.map((session) => (
                  <div className={Style.session_box} key={session._id} onClick={() => openModal(session)}>
                    <div className={Style.session_box_bar}>
                      <p className={Style.session_title}>Quiz Title: {session.quizTitle}</p>
                      <p className={Style.question_count}>Questions: {session.questionCount}</p>
                    </div>
                  </div>
                ))}
              </div>

              {modalIsOpen && (
                <div className={Style.a_modal}>
                  <div className={Style.a_modal_content}>
                    <button1 className={Style.a_modal_button} onClick={() => setModalIsOpen(false)}>X</button1>
                    {currentSession && (
                      <div>
                        <div className={Style.a_modal_stylediv}>
                          <p className={Style.a_modal_title}>Quiz Title: {currentSession.quizTitle}</p>
                        </div>
                        <p className={Style.a_modal_para}>Number of Questions: {currentSession.questionCount}</p>
                        <p className={Style.a_modal_para}>Total No of Players :{" "}{currentSession.joinedPlayers && currentSession.joinedPlayers.length}</p>
                        <p className={Style.a_modal_para}>Correct Answer Percentage :{" "} {(currentSession.totalCorrectAnswers / (currentSession.joinedPlayers.length * currentSession.questionCount)) * 100} %</p>
                        <p className={Style.a_modal_para}>Time: 2 min</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
