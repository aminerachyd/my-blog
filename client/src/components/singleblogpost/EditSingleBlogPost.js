import React, { useState, useEffect, setState, Fragment, Link } from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";

// Redux
import { getPost } from "../../actions/postActions";
import { connect } from "react-redux";

const EditSingleBlogPost = ({
  getPost,
  post: {
    post: { id, title, body, createdAt, lastUpdated, tags },
    loading,
  },
  match,
}) => {
  id = match.params.id;

  const [formData, setFormData] = useState({ title, body, tags });

  useEffect(() => {
    getPost(id);
  }, [getPost]);

  return loading ? (
    <Fragment>Post loading</Fragment>
  ) : (
    <div className="container mt-100">
      <div className="row">
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
                            className="card-text my-2 form-control"
                            name="body"
                            defaultValue={title}
                          />
                        </div>
                        <div className="form-group">
                          <label className="h4">Post body</label>
                          <textarea
                            className="card-text my-2 form-control"
                            name="body"
                            defaultValue={body}
                          ></textarea>
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
              <a className="btn btn-go d-block btn-lg mb-3">Save changes</a>
              <a to="/blog" className="btn btn-go d-block btn-lg">
                Go back to posts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditSingleBlogPost.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(EditSingleBlogPost);
