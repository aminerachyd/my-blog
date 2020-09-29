import React from "react";
import EditParagraphs from "./EditParagraphs";
import PropTypes from "prop-types";

const EditAboutMe = ({ paragraphs }) => {
  return (
    <div className="card my-3 blog-post">
      <div className="container card-body p-5">
        <EditParagraphs paragraphs={paragraphs} />
      </div>
    </div>
  );
};

EditAboutMe.propTypes = {
  paragraphs: PropTypes.object.isRequired,
};

export default EditAboutMe;
