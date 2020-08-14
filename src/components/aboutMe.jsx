import React from "react";
import profile_image from "../assets/profile_image.png";
import "./css/aboutMe.css";
import TypingEffect from "./typing";
const AboutMe = () => {
  return (
    <>
      <div className="AboutMe">
        <section className="about-me-hero">
          <TypingEffect />
          <button
            className="main-content-button"
            onClick={() => window.scrollTo(0, 800)}
          >
            More On Me
          </button>
        </section>
        <main className="row">
          <div className="main-image profile_image" id="main-content">
            <img src={profile_image} alt="profile" align="center" />
          </div>
          <article className="main-content">
            <span className="main-content-heading">About Me</span>
            <span className="main-content-article">
              Hello, I am Himanshu , currently pursuing BTECH degree in
              Electronics and Communication Engineering. I have recently worked
              with front end frameworks like react and vue along with nodejs and
              firebase as backend. Apart for web Development i also do little
              bit mobile development with flutter, firebase and some low level
              stuff in c++ and python. Apart from this i also like to work on
              Robotics, Embedded systems and Internet of things. I also have
              great interest in CyberSecurity, Networking and Artificial
              Intelligence. I am also have a decent experience in GFX designing,
              compositing and Video Editing.
            </span>
          </article>
        </main>
      </div>
    </>
  );
};

export default AboutMe;
