import React from "react";
import Navibar from "../component/Navbar";
import Footer from "../component/Footer";
import CaroselSlider from "../component/CaroselSlider";
import CatogeryBar from "../component/CatogeryBar";
import ImageSlider from "../component/ImageSlider";
import QuizSection from "../component/QuizSection";

function Home() {
  return (
    <div>
      <Navibar classname="sticky" />
      <ImageSlider />
      <CatogeryBar />
      <QuizSection />
      <CaroselSlider />
      <Footer />
    </div>
  );
}

export default Home;
