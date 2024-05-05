import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import axios from "axios";

import "./App.css";

import Slidebar from "./component/Slidebar";
import Analytics from "./pages/Analytics";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "../src/pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Help2 from "./pages/Help2";
import Maintaince from "./pages/Maintaince";
import Contact from "./pages/Contact";
import Contact2 from "./pages/Contact2"
import LeaderboardPage from './pages/LeaderboardPage'
import Library from "./pages/Library";
import CreateAndPlay from "./pages/CreateAndPlay";
import HostLandingPage from "./pages/HostLandingPage";
import PlayersLandingPage from "./pages/PlayersLandingPage";
import QuizPage from "./pages/QuizPage";
import QuizCreatePage from "./pages/QuizCreatePage";
import Navibar from "./component/Navibar";
import Footer from "./component/Footer";
import Navibar2 from "./component/Navibar2";
import Discover from "./pages/Discover";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  
  // Navigation Bar Switching Function
  const location = useLocation();
  const isWelcomeIn = [ '/', '/help', '/contact', '/Login', '/Register' ].includes(location.pathname);
  const isLoggedIn = location.pathname !== '/' && [ '/home', '/profile', '/maintaince', '/library', '/createandplay', '/quizpage', '/leaderboard', '/quizcreatepage/', '/help2', '/contact2', '/analytics', '/hostlanding', '/playerslanding', '/discover' ].includes(location.pathname);

  // Loading Screen Function
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    // Custumize the Loading Screen Function
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
          {/* Navigation Bar Switching Argument */}
          {isWelcomeIn ? <Navibar /> : isLoggedIn ? <Navibar2 /> : null}

          <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
          <Routes>
            <Route path="/" element={<Welcome />}  />
            <Route path="/help" element={<Help />} />
            <Route path="/help2" element={<Help2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact2" element={<Contact2/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />}  />
            <Route path="/profile" element={<Profile />} />
            <Route path="/maintaince" element={<Maintaince />} />
            <Route path="/library" element={<Library />} />
            <Route path="/slidebar" element={<Slidebar />} />
            <Route path="/createandplay" element={<CreateAndPlay />} />
            <Route path="/hostlanding/:quizId/:gamePin" element={<HostLandingPage />}/>
            <Route path="/playerslanding/:quizId/:gamePin" element={<PlayersLandingPage />}/>
            <Route path="/playerslanding/:gamePin" element={<PlayersLandingPage />}/>
            <Route path="/quizpage/:quizId/:gamePin" element={<QuizPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/quizcreatepage" element={<QuizCreatePage/>} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/discover" element={<Discover />} />
          </Routes>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
