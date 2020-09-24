import React, { useState, useEffect, setState, Fragment, Link } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

import Moment from "react-moment";

// Redux
import { getPost, updatePost, deletePost } from "../../actions/postActions";
import { connect } from "react-redux";

const EditSingleBlogPost = ({
  getPost,
  updatePost,
  deletePost,
  post: {
    post: { id, title, body, createdAt, lastUpdated, tags },
    loading,
  },
  match,
}) => {
  id = match.params.id;

  useEffect(() => {
    getPost(id);
  }, [getPost]);

  const [formData, setFormData] = useState({ title, body, tags });

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitChange = (e) => {
    e.preventDefault();
    updatePost(id, formData);
    // TODO save indication
  };

  const submitDelete = (e) => {
    e.preventDefault();
    // TODO delete post
    deletePost(id);
  };

  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col">
          <div className="container">
            <h2 className="display-4">Edit Post</h2>
            <div className="row">
              <div className="col">
                <span className="h4 d-block">
                  {" "}
                  Created at: <Moment format="DD/MM/YYYY">
                    {createdAt}
                  </Moment>{" "}
                </span>
                <span className="h4 d-block">
                  {" "}
                  Last updated:{" "}
                  <Moment format="DD/MM/YYYY">{lastUpdated}</Moment>{" "}
                </span>
              </div>{" "}
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
                          name="title"
                          defaultValue={title}
                        />
                      </div>
                      <div className="form-group">
                        <label className="h4">Post body</label>
                        <TextareaAutosize
                          onChange={(e) => onChange(e)}
                          className="card-text my-2 form-control"
                          name="body"
                          defaultValue={body}
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
              onClick={(e) => submitChange(e)}
              className="btn btn-go d-block btn-lg mb-3"
            >
              <i className="far fa-save"></i> Save changes
            </a>
            <a href="/blog" className="btn btn-go d-block btn-lg">
              <i className="fas fa-arrow-left"></i> Go back to posts
            </a>{" "}
            <hr />
            <a
              onClick={(e) => submitDelete(e)}
              className="btn btn-danger d-block btn-lg mb-3"
            >
              <i className="fas fa-trash-alt"></i> Delete this post
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

EditSingleBlogPost.propTypes = {
  getPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost, deletePost, updatePost })(
  EditSingleBlogPost
);
