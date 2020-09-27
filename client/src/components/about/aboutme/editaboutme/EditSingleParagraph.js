import React, { Fragment } from "react";
import PropTypes from "prop-types";

const EditSingleParagraph = ({ paragraph: { image, text, id } }) => {
  // TODO Make edit paragraphs
  return (
    // <div className="my-2">
    //   <h4>A paragraph</h4>
    //   <hr />
    //   <form>
    //     <div className="form-group">
    //       <label>Change its text</label>
    //       <input type="text" className="form-control" defaultValue={text} />
    //     </div>
    //     <div className="form-group">
    //       <label>Change its image</label>
    //       <img className="ml-auto mr-auto" src={image} alt="" />
    //     </div>
    //   </form>
    // </div>
    <div className="row blog-paragraph">
      <h4>A paragraph</h4>
      <hr />
      <div className="col">
        <div className="form-group">
          <label>Change its text</label>
          <input type="text" className="form-control" defaultValue={text} />
        </div>
      </div>
      <div className="col-lg-5 ">
        <div className="form-group">
          <label>Change its image</label>
          <img className="ml-auto mr-auto" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

EditSingleParagraph.propTypes = {
  paragraph: PropTypes.object.isRequired,
};

export default EditSingleParagraph;
