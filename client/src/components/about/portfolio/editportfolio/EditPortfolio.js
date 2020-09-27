import React, { Fragment } from "react";
import EditProjects from "./EditProjects";
import PropTypes from "prop-types";

const EditPortfolio = ({ projects }) => {
  return (
    <div className="card my-3 blog-post">
      <div className="container card-body p-5">
        <EditProjects projects={projects} />
      </div>
    </div>

    // <Fragment>
    //   {projects.map((project) => (
    //     <h1>A project</h1>
    //   ))}
    // </Fragment>
  );
};

EditPortfolio.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default EditPortfolio;
