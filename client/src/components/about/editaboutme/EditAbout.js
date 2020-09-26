import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import {
  getAboutParagraphs,
  getAboutProjects,
} from "../../../actions/aboutActions";
import EditAboutMe from "./EditAboutMe";
import EditPortfolio from "./EditPortfolio";

const EditAbout = ({
  getAboutParagraphs,
  getAboutProjects,
  about: { about, projects, loading },
}) => {
  useEffect(() => {
    getAboutParagraphs();
    getAboutProjects();
  }, [getAboutParagraphs, getAboutProjects]);

  // TODO Loading here
  return (
    <Fragment>
      <EditAboutMe about={about} />
      <EditPortfolio projects={projects} />
    </Fragment>
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
