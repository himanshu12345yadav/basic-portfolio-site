import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import TypingEffect from "./typing";

const Layout = (props) => {
  const toggle = () => {
    const burger = document.getElementsByClassName("burger-content")[0];
    const links = document.getElementsByClassName("nav-links")[0];
    links.classList.toggle("nav-links-down");
    document.body.classList.toggle("modal");
    if (links.classList.contains("links-down")) {
      burger.classList.toggle("burger-open");
    } else {
      burger.classList.toggle("burger-open");
    }
  };

  return (
    <React.Fragment>
      <nav>
        <div className="nav-icons">
          <NavLink to="/">
            <img src={Logo} alt="logo" height="30" />
          </NavLink>
          <div
            className="burger-description"
            type="button"
            onClick={(event) => toggle(event)}
          >
            <div className="burger burger-slider">
              <div className="burger-content burger-slider-content"></div>
            </div>
          </div>
        </div>

        <div className="nav-links">
          <ul>
            <NavLink activeClassName="active-navlinks" to="/home">
              Home
            </NavLink>
          </ul>
          <ul>
            <NavLink activeClassName="active-navlinks" to="/location">
              Location
            </NavLink>
          </ul>

          <ul>
            <NavLink activeClassName="active-navlinks" to="/projects">
              Projects
            </NavLink>
          </ul>

          <ul>
            <NavLink activeClassName="active-navlinks" to="/subjects">
              Subjects
            </NavLink>
          </ul>
          <ul>
            <NavLink activeClassName="active-navlinks" to="/aboutHtml">
              Html Docs
            </NavLink>
          </ul>

          <ul>
            <NavLink activeClassName="active-navlinks" to="/aboutMe">
              About Me
            </NavLink>
          </ul>
        </div>
      </nav>
      <div className="overlay"></div>
      <TypingEffect />
      <div>{props.children}</div>
      <footer id="copyright">
        &copy; 2020 All Rights Reserved
        <span className="youtube">
          <a
            href="https://www.youtube.com/channel/UC5umyuP_33AQ-WGvHEexnOA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube-play fa-2x"></i>
          </a>
          <a
            href="https://github.com/himanshu12345yadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github fa-2x"></i>
          </a>
        </span>
        <div id="footer-statement">
          Made With &nbsp;
          <i className="fa fa-heart" style={{ color: "#CC3D5C" }}></i>
          &nbsp; by Himanshu Yadav
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
