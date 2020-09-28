import React, { Fragment } from "react";
import AutoresizeTextarea from "react-textarea-autosize";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import {
  updateAboutProject,
  addAboutProject,
  deleteAboutProject,
} from "../../../../actions/aboutActions";

const EditSingleProject = ({
  project: { id, image, title, link, description },
}) => {
  // TODO Make edit projet
  const submitChange = (e) => {
    e.preventDefault();
    let dataToSend = new FormData();
    // dataToSend.set("text", formData.text);
    // dataToSend.set("order", formData.order);
    // dataToSend.set("image", formData.image);
    id ? updateAboutProject(id, dataToSend) : addAboutProject(dataToSend);
  };

  const deleteProject = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="card">
        <div className="row blog-paragraph"></div>
        {image ? (
          <img className="card-img-top img-fluid" src={image} alt="" />
        ) : (
          <h4 className="p-3">No Image Yet For This Project</h4>
        )}
        <div className="card-body">
          <div className="form-group">
            <label>Change The Image</label>
            <input type="file" name="image" className="form-control-file" />
          </div>
          <div className="form-group">
            <label>Change The Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Project Title"
              className="form-control"
            />
          </div>{" "}
          <div className="form-group">
            <label>Change The Link</label>
            <input
              type="text"
              name="title"
              defaultValue={link}
              placeholder="Project Title"
              className="form-control"
            />
          </div>{" "}
          <div className="form-group">
            <label>Change The Description</label>
            <AutoresizeTextarea
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Project Description"
              className="form-control"
            />
          </div>{" "}
        </div>
        <div className="text-center">
          <button
            onClick={(e) => submitChange(e)}
            className="btn btn-go block btn-lg mb-3"
          >
            Save this project
          </button>{" "}
          <button
            onClick={(e) => deleteProject(e)}
            className="btn btn-danger block btn-lg mb-3"
          >
            Delete this project
          </button>
        </div>
      </div>
    </Fragment>
  );
};

EditSingleProject.propTypes = {
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, {
  addAboutProject,
  updateAboutProject,
  deleteAboutProject,
})(EditSingleProject);
