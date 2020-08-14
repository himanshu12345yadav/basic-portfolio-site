import React from "react";
import profile_image from "../assets/profile_image.png";
import './css/home.css';
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="banner">
          <img src={profile_image} alt="banner" />
        </div>
        <div className="intro">
          <h1>Himanshu Yadav</h1>
          <h2>Student | Programmer | Learner | Tech Enthusiast</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
