import React, { useState, useEffect } from "react";
import Home from "./home";
import Layout from "./Layout";
import Location from "./location";
import Projects from "./projects";
import Subjects from "./subjects";
import AboutHtml from "./aboutHtml";
import AboutMe from "./aboutMe";
import Spinner from "./spinner";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(!isLoading);
    });
  });
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/location" component={Location} exact />
            <Route path="/Projects" component={Projects} exact />
            <Route path="/Subjects" component={Subjects} exact />
            <Route path="/aboutHtml" component={AboutHtml} exact />
            <Route path="/aboutMe" component={AboutMe} exact />
          </Switch>
        </Layout>
      )}
    </>
  );
};

export default App;
