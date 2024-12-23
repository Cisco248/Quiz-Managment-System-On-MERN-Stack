import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./pages/Home";
import Navibar from "./component/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Sign from "./pages/Sign";
import PopMain from "./component/PopMain";
import FileUpload from "./pages/FileUpload";

const rootStyle = {
  Display: "flex",
  justifyContent: "center",
  textAlign: "center",
};

function App() {
  return (
    <div className="div" style={rootStyle}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nav" element={<Navibar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/pop" element={<PopMain />} />
        <Route path="/file-upload" element={<FileUpload />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
