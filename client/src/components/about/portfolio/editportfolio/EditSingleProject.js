import React, { Fragment } from "react";
import PropTypes from "prop-types";

const EditSingleProject = ({ project }) => {
  // TODO Make edit projet
  return (
    <Fragment>
      <h1>A project</h1>
    </Fragment>
  );
};

EditSingleProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default EditSingleProject;
