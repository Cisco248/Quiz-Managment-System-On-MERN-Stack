import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./LeaderboardPage.css";

const LeaderboardPage = () => {
  const { gamePin } = useParams();
  const [session, setSession] = useState(null);

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
        setSession(data.session);
        console.log("Updated player score:", data);
      } catch (error) {
        console.error("Error fetching session details:", error.message);
      }
    };

    // Call fetchSessionDetails immediately and then every 5 seconds
    fetchSessionDetails();
    const intervalId = setInterval(fetchSessionDetails, 5000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [gamePin]);

  if (!session) {
    return <div>Loading...</div>;
  }

  // Sort playerScores in descending order
  const sortedPlayerScores = [...session.playerScores].sort(
    (a, b) => b.score - a.score
  );

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <div className="main-div">
        <div className="div">
          <div className="leaderboard-box-div">
            <div className="leaderboard-box-background">
              <div>
                <h1 className="leaderboard-text">Leaderboard</h1>
                <div className="score-boxes">
                  {sortedPlayerScores.map((playerScore, index) => (
                    <div
                      key={index}
                      className={`score-box-${index}`}
                      style={{
                        top: `${151 + index * 97}px`,
                        backgroundColor: getRandomColor(),
                      }}
                    >
                      <h2 className="player-rank">{index + 1}</h2>
                      <h2 className="player-name">{playerScore.playerId}</h2>
                      <p className="player-score">Score {playerScore.score}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
