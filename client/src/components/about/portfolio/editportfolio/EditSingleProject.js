import React, { Fragment, useState } from "react";
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
  updateAboutProject,
  addAboutProject,
  deleteAboutProject,
  about,
  deleteProjectParent,
  project: { id, image, title, link, description },
}) => {
  const [formData, setFormData] = useState({
    id,
    image,
    title,
    link,
    description,
  });

  let imageToSend;

  const onChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "image":
        imageToSend = e.target.files[0];
        break;
      default:
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        break;
    }
  };

  const submitChange = async (e) => {
    e.preventDefault();
    let dataToSend = new FormData();
    dataToSend.set("title", formData.title);
    dataToSend.set("image", imageToSend);
    dataToSend.set("link", formData.link);
    dataToSend.set("description", formData.description);
    // TODO Modify returns in action/backend
    if (id !== "1") {
      const res = await updateAboutProject(id, dataToSend);

      setFormData({
        ...formData,
        image: res.image,
      });
    } else {
      const res = await addAboutProject(dataToSend);

      setFormData({
        ...formData,
        image: res.image,
        id: res.id,
      });
    }
  };

  const deleteProject = (e) => {
    e.preventDefault();
    deleteAboutProject(formData.id);
    deleteProjectParent(formData.id);
  };

  return (
    <Fragment>
      <h4>A project</h4>
      <hr />
      <div className="card mb-2">
        <div className="row blog-paragraph"></div>
        {formData.image ? (
          <img
            className="ml-auto mr-auto img-fluid"
            src={formData.image}
            alt=""
          />
        ) : (
          <h4 className="p-3">No Image Yet For This Project</h4>
        )}
        <div className="card-body">
          <div className="form-group">
            <label>Change The Image</label>
            <input
              onChange={(e) => onChange(e)}
              type="file"
              name="image"
              className="form-control-file"
            />
          </div>
          <div className="form-group">
            <label>Change The Title</label>
            <input
              onChange={(e) => onChange(e)}
              type="text"
              name="title"
              defaultValue={formData.title}
              placeholder="Project Title"
              className="form-control"
            />
          </div>{" "}
          <div className="form-group">
            <label>Change The Link</label>
            <input
              onChange={(e) => onChange(e)}
              type="text"
              name="link"
              defaultValue={formData.link}
              placeholder="Project Link"
              className="form-control"
            />
          </div>{" "}
          <div className="form-group">
            <label>Change The Description</label>
            <AutoresizeTextarea
              onChange={(e) => onChange(e)}
              type="text"
              name="description"
              defaultValue={formData.description}
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
  about: PropTypes.object.isRequired,
  deleteProjectParent: PropTypes.func.isRequired,
  addAboutProject: PropTypes.func.isRequired,
  updateAboutProject: PropTypes.func.isRequired,
  deleteAboutProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, {
  addAboutProject,
  updateAboutProject,
  deleteAboutProject,
})(EditSingleProject);
