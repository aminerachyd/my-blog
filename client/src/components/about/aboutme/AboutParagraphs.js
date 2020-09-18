import React, { Fragment, useEffect } from "react";
import { AboutParagraph } from "./AboutParagraph";
import PropTypes from "prop-types";

// Redux
import { getAbout } from "../../../actions/aboutActions";
import { connect } from "react-redux";

const AboutParagraphs = ({ getAbout, about: { about, loading } }) => {
  useEffect(() => {
    getAbout();
  }, [getAbout]);

  return loading ? (
    <Fragment>Loading About</Fragment>
  ) : (
    <Fragment>
      {about.map((paragaph) => (
        <AboutParagraph key={paragaph.id} paragraph={paragaph} />
      ))}
    </Fragment>
  );
};

AboutParagraphs.propTypes = {
  getAbout: PropTypes.func.isRequired,
  about: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, { getAbout })(AboutParagraphs);
