import React, { useState } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

// Redux
import { addPost } from "../../actions/postActions";
import { connect } from "react-redux";

const NewSingleBlogPost = ({ addPost, post }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: [],
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitPost = (e) => {
    e.preventDefault();
    addPost(formData);
  };

  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col">
          <div className="container">
            <h2 className="display-4">New Post</h2>
            <div className="row">
              <div className="col"></div>
            </div>
            <hr />
            <div className="card my-3 blog-post">
              <div className="card-body p-5">
                <div className="row mb-3 blog-paragraph">
                  <div className="col">
                    <form>
                      <div className="form-group">
                        <label className="h4">Post title</label>
                        <input
                          onChange={(e) => onChange(e)}
                          className="card-text d-block my-2 form-control"
                          placeholder="A title for the new post"
                          name="title"
                        />
                      </div>
                      <div className="form-group">
                        <label className="h4">Post body</label>
                        <TextareaAutosize
                          onChange={(e) => onChange(e)}
                          placeholder="The body of the new post"
                          className="card-text my-2 form-control"
                          name="body"
                        />
                      </div>
                      {/* TODO Implement tags modification */}
                      {/* <span className="blockquote-footer ml-auto d-block text-right">
                    Tags :{" "}
                    {tags.map((tag) => (
                      <Fragment>
                        <a
                          href="#"
                          className="btn badge badge-danger text-white"
                        >
                          {tag}
                        </a>{" "}
                      </Fragment>
                    ))}
                  </span> */}{" "}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <a
              onClick={(e) => submitPost(e)}
              className="btn btn-go d-block btn-lg mb-3"
            >
              <i className="fas fa-plus"></i> Add New Post
            </a>
            <hr />
            <a className="btn btn-danger d-block btn-lg mb-3">
              <i className="fas fa-arrow-left"></i> Abort And Go Back To Posts
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

NewSingleBlogPost.propTypes = {
  addPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { addPost })(NewSingleBlogPost);
