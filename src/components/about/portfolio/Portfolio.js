import React, { Fragment } from "react";
import { Project } from "./Project";

export const Portfolio = () => {
  return (
    <Fragment>
      <h2 className="display-4 mt-5">Portfolio</h2>
      <hr />
      <div className="card-columns">
        <Project />
        <Project />
        <Project />
      </div>
    </Fragment>
  );
};
