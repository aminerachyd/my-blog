import React, { Fragment, useState } from "react";
import EditSingleProject from "./EditSingleProject";
import PropTypes from "prop-types";

const EditProjects = ({ projects }) => {
  const [projectsState, setProjectsState] = useState({
    projects,
    isAdded: false,
  });

  const addProject = (e) => {
    e.preventDefault();
    setProjectsState({
      ...projectsState,
      isAdded: true,
      projects: [
        ...projectsState.projects,
        {
          title: "",
          description: "",
          link: "",
          image: "",
        },
      ],
    });
  };

  return (
    <Fragment>
      {projectsState.projects.map((project) => (
        <EditSingleProject key={project.id} project={project} />
      ))}
      <button
        onClick={(e) => addProject(e)}
        className="btn btn-lg d-block btn-primary w-100 mt-3"
      >
        Add a new project
      </button>
    </Fragment>
  );
};

EditProjects.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default EditProjects;
