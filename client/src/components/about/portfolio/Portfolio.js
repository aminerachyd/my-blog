import React, { Fragment, useEffect } from "react";
import { Project } from "./Project";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getAboutProjects } from "../../../actions/aboutActions";

const Portfolio = ({ getAboutProjects, about: { projects, loading } }) => {
  useEffect(() => {
    getAboutProjects();
  }, [getAboutProjects]);

  return loading || !projects ? (
    <Fragment>
      <h2 className="display-4 mt-5">Portfolio</h2>
      <hr />
      Projects Loading
    </Fragment>
  ) : (
    <Fragment>
      <h2 className="display-4 mt-5">Portfolio</h2>
      <hr />
      <div className="card-columns">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </Fragment>
  );
};

Portfolio.propTypes = {
  getAboutProjects: PropTypes.func.isRequired,
  about: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, { getAboutProjects })(Portfolio);
