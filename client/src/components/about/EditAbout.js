import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import {
  getAboutParagraphs,
  getAboutProjects,
} from "../../actions/aboutActions";
import EditAboutMe from "./aboutme/editaboutme/EditAboutMe";
import EditPortfolio from "./portfolio/editportfolio/EditPortfolio";

const EditAbout = ({
  getAboutParagraphs,
  getAboutProjects,
  about: { about, projects, loading },
}) => {
  useEffect(() => {
    getAboutParagraphs();
    getAboutProjects();
  }, [getAboutParagraphs, getAboutProjects]);

  return loading ? (
    <h1>About loading</h1>
  ) : (
    <div className="container mt-100">
      <div className="row">
        <div className="col">
          <div className="container">
            <Link to={`/about`} className="btn btn-go d-block btn-lg mb-5">
              Go Back To About
            </Link>
            <h2 className="display-4">Edit About Me</h2>
            <hr />

            <EditAboutMe about={about} />

            <h2 className="display-4">Edit Portfolio</h2>
            <hr />

            <EditPortfolio projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

EditAbout.propTypes = {
  getAboutParagraphs: PropTypes.func.isRequired,
  getAboutProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, {
  getAboutParagraphs,
  getAboutProjects,
})(EditAbout);
