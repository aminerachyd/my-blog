import React from "react";
import { Link } from "react-router-dom";
import PrivateComponent from "../routing/PrivateComponent";
import AboutMe from "./aboutme/AboutMe";
import Portfolio from "./portfolio/Portfolio";

export const About = () => {
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col">
          <div className="container">
            <PrivateComponent>
              <Link
                to={`/about/edit`}
                className="btn btn-go d-block btn-lg mb-5"
              >
                Edit About
              </Link>
            </PrivateComponent>
            <AboutMe />
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
};
