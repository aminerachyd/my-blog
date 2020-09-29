import React, { Fragment, useEffect } from "react";
import { AboutParagraph } from "./AboutParagraph";
import PropTypes from "prop-types";

// Redux
import { getAboutParagraphs } from "../../../actions/aboutActions";
import { connect } from "react-redux";

const AboutParagraphs = ({
  getAboutParagraphs,
  about: { paragraphs, loading },
}) => {
  useEffect(() => {
    getAboutParagraphs();
  }, [getAboutParagraphs]);

  return loading || !paragraphs ? (
    <Fragment>Loading About</Fragment>
  ) : (
    <Fragment>
      {paragraphs.map((paragaph) => (
        <AboutParagraph key={paragaph.id} paragraph={paragaph} />
      ))}
    </Fragment>
  );
};

AboutParagraphs.propTypes = {
  getAboutParagraphs: PropTypes.func.isRequired,
  about: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, { getAboutParagraphs })(
  AboutParagraphs
);
