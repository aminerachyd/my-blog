import React from "react";
import EditParagraphs from "./EditParagraphs";
import PropTypes from "prop-types";

const EditAboutMe = ({ about }) => {
  return (
    <div className="card my-3 blog-post">
      <div className="container card-body p-5">
        <EditParagraphs paragraphs={about} />
      </div>
    </div>
  );
};

EditAboutMe.propTypes = {
  about: PropTypes.object.isRequired,
};

export default EditAboutMe;
