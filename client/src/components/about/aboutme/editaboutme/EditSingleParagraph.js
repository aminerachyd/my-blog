import React, { Fragment, useState } from "react";
import AutosizeTextArea from "react-textarea-autosize";
import PropTypes from "prop-types";

// Redux
import { updateAboutParagraph } from "../../../../actions/aboutActions";
import { connect } from "react-redux";

const EditSingleParagraph = ({
  updateAboutParagraph,
  about,
  paragraph: { image, text, order, id },
}) => {
  const [formData, setFormData] = useState({
    text,
    image,
    order,
  });

  const onChange = (e) => {
    switch (e.target.name) {
      case "image":
        setFormData({
          ...formData,
          image: e.target.files[0],
        });
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

  const submitChange = (e) => {
    e.preventDefault();
    // TODO Send formData
    console.log(formData);
    let dataToSend = new FormData();
    dataToSend.set("text", formData.text);
    dataToSend.set("order", formData.order);
    dataToSend.set("image", formData.image);
    updateAboutParagraph(id, dataToSend);
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
            <img className="ml-auto mr-auto" src={image} alt="" />
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
            className="btn btn-go block btn-lg "
          >
            Save this paragraph
          </button>
        </div>
      </div>
    </div>
  );
};

EditSingleParagraph.propTypes = {
  paragraph: PropTypes.object.isRequired,
  updateAboutParagraph: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, { updateAboutParagraph })(
  EditSingleParagraph
);
