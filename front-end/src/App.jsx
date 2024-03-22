import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";

import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "../src/pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QuizCreatePage from "./pages/QuizCreatePage";
import Help from "./pages/Help";
import Maintaince from "./pages/Maintaince";
import Contact from "./pages/Contact";
// import Leaderboard from './pages/LeaderBoard'
import Library from "./pages/Library";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz create" element={<QuizCreatePage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/maintaince" element={<Maintaince />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
        <Route path="/library" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
