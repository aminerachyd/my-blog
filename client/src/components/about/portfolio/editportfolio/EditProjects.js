import React, { Fragment } from "react";
import EditSingleProject from "./EditSingleProject";
import PropTypes from "prop-types";

const EditProjects = ({ projects }) => {
  return (
    <Fragment>
      {projects.map((project) => (
        <EditSingleProject key={project.id} project={project} />
      ))}
    </Fragment>
  );
};

EditProjects.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default EditProjects;
