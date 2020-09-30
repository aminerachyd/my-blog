import React, { Fragment, useState } from "react";
import AutosizeTextArea from "react-textarea-autosize";
import PropTypes from "prop-types";

// Redux
import {
  updateAboutParagraph,
  addAboutParagraph,
  deleteAboutParagraph,
} from "../../../../actions/aboutActions";
import { connect } from "react-redux";

const EditSingleParagraph = ({
  updateAboutParagraph,
  addAboutParagraph,
  deleteAboutParagraph,
  about,
  paragraph: { image, text, order, id },
}) => {
  const [formData, setFormData] = useState({
    text,
    image,
    order,
  });

  let imageToSend;

  const onChange = (e) => {
    switch (e.target.name) {
      case "image":
        imageToSend = e.target.files[0];
        break;
      case "text":
        setFormData({
          ...formData,
          text: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const submitChange = async (e) => {
    e.preventDefault();
    let dataToSend = new FormData();
    dataToSend.set("text", formData.text);
    dataToSend.set("order", formData.order);
    dataToSend.set("image", imageToSend);

    //TODO SET STATE HERE

    if (id) {
      const res = await updateAboutParagraph(id, dataToSend);
      console.log(res);

      setFormData({
        ...formData,
        image: res.image,
      });
    } else {
      // TODO change image here
      addAboutParagraph(dataToSend);
    }
  };

  const deleteParagraph = (e) => {
    e.preventDefault();
    deleteAboutParagraph(id);
  };

  return (
    <div className="row blog-paragraph mb-3">
      <h4>A paragraph</h4>
      <hr />
      <div className="border p-2">
        <div className="col">
          <div className="form-group">
            <label>Change its text</label>
            <AutosizeTextArea
              type="text"
              className="form-control"
              defaultValue={text}
              name="text"
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="col-lg-5 ">
          <div className="form-group">
            <label>Change its image</label>
            {image ? (
              <img className="ml-auto mr-auto" src={formData.image} alt="" />
            ) : (
              <h5>No Image Yet</h5>
            )}
            <input
              onChange={(e) => onChange(e)}
              name="image"
              type="file"
              className="my-2 form-control-file "
            />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={(e) => submitChange(e)}
            className="btn btn-go block btn-lg mb-2"
          >
            Save this paragraph
          </button>{" "}
          <button
            onClick={(e) => deleteParagraph(e)}
            className="btn btn-danger block btn-lg mb-2"
          >
            Delete this paragraph
          </button>
        </div>
      </div>
    </div>
  );
};

EditSingleParagraph.propTypes = {
  paragraph: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  updateAboutParagraph: PropTypes.func.isRequired,
  addAboutParagraph: PropTypes.func.isRequired,
  deleteAboutParagraph: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, {
  updateAboutParagraph,
  addAboutParagraph,
  deleteAboutParagraph,
})(EditSingleParagraph);
