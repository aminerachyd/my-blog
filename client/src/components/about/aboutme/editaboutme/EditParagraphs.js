import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import EditSingleParagraph from "./EditSingleParagraph";

const EditParagraphs = ({ paragraphs }) => {
  const [paragraphsState, setParagraphsState] = useState({
    paragraphs,
    isAdded: false,
  });

  const addParagraph = (e) => {
    e.preventDefault();
    !paragraphsState.isAdded &&
      setParagraphsState({
        isAdded: true,
        paragraphs: [
          ...paragraphsState.paragraphs,
          {
            text: "",
            image: "",
            order: "1",
          },
        ],
      });
  };

  const deleteParagraphParent = (id) => {
    setParagraphsState({
      ...paragraphsState,
      isAdded: false, // FIXME might be buggy
      paragraphs: paragraphsState.paragraphs.filter(
        (paragraph) => paragraph.id !== id
      ),
    });
  };

  return (
    <Fragment>
      {paragraphsState.paragraphs.map((paragraph) => (
        <EditSingleParagraph
          key={paragraph.id}
          paragraph={paragraph}
          deleteParagraphParent={deleteParagraphParent}
        />
      ))}{" "}
      <button
        onClick={(e) => addParagraph(e)}
        className="btn btn-lg d-block btn-primary w-100"
      >
        Add a new paragraph
      </button>
    </Fragment>
  );
};

EditParagraphs.propTypes = {
  paragraphs: PropTypes.object.isRequired,
};

export default EditParagraphs;
