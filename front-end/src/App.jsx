import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import axios from "axios";

import "./App.css";

import Slidebar from "./component/Slidebar";

import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "../src/pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import QuizCreatePage from "./pages/QuizCreatePage";
import Help from "./pages/Help";
import Maintaince from "./pages/Maintaince";
import Contact from "./pages/Contact";
import LeaderboardPage from './pages/LeaderboardPage'
import Library from "./pages/Library";
import CreateAndPlay from "./pages/CreateAndPlay";
import HostLandingPage from "./pages/HostLandingPage";
import PlayersLandingPage from "./pages/PlayersLandingPage";
import QuizPage from "./pages/QuizPage";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <RiseLoader
          className="loader"
          color={"#fff"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={0.7}
        />
      ) : (
        <>
          <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            {/* {<Route path="/quiz create" element={<QuizCreatePage />} />} */}
            <Route path="/help" element={<Help />} />
            <Route path="/maintaince" element={<Maintaince />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/library" element={<Library />} />
            <Route path="/slidebar" element={<Slidebar />} />
            <Route path="/createandplay" element={<CreateAndPlay />} />
            <Route path="/hostlanding/:quizId/:gamePin" element={<HostLandingPage />}/>
            <Route path="/playerslanding/:quizId/:gamePin" element={<PlayersLandingPage />}/>
            <Route path="/playerslanding/:gamePin" element={<PlayersLandingPage />}/>
            <Route path="/quizpage/:quizId/:gamePin" element={<QuizPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
