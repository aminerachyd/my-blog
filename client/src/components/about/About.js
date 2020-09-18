import React from "react";
import AboutMe from "./aboutme/AboutMe";
import { Portfolio } from "./portfolio/Portfolio";

export const About = () => {
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col">
          <div className="container">
            <AboutMe />
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
};
