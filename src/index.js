import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/basic-portfolio-site">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
