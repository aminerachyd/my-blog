import React, { Fragment } from "react";
import PropTypes from "prop-types";
import EditSingleParagraph from "./EditSingleParagraph";

const EditParagraphs = ({ paragraphs }) => {
  return (
    <Fragment>
      {paragraphs.map((paragraph) => (
        <EditSingleParagraph key={paragraph.id} paragraph={paragraph} />
      ))}
    </Fragment>
  );
};

EditParagraphs.propTypes = {};

export default EditParagraphs;
