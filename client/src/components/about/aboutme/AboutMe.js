import React, { Fragment, useEffect } from "react";
import AboutParagraphs from "./AboutParagraphs";
import RichTextEditor from "../../richtexteditor/RichTextEditor";

const AboutMe = () => {
  return (
    <Fragment>
      <h2 className="display-4">About Me</h2>
      <hr />

      {/* FIXME for testing purposes */}
      <div className="card my-3 blog-post">
        <div className="container card-body p-5">
          <AboutParagraphs />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
