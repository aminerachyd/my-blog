import React, { Fragment, useEffect } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { getPost } from "../../actions/postActions";
import { connect } from "react-redux";
import PrivateComponent from "../routing/PrivateComponent";

const SingleBlogPost = ({
  getPost,
  post: {
    post: { id, title, body, tags, lastUpdated, createdAt },
    loading,
  },
  match,
}) => {
  id = match.params.id;
  useEffect(() => {
    getPost(id);
  }, [getPost]);

  return loading ? (
    <Fragment>Post Loading</Fragment>
  ) : (
    <div className="container mt-100 blog-post">
      <div className="row">
        <div className="col">
          <div className="container">
            <h2 className="display-4">{title}</h2>
            <div className="row">
              <div className="col">
                <span className="h4 d-block">
                  {" "}
                  Created at : <Moment format="DD/MM/YYYY">
                    {createdAt}
                  </Moment>{" "}
                </span>
                <span className="h4 d-block">
                  {" "}
                  Last updated :{" "}
                  <Moment format="DD/MM/YYYY">{lastUpdated}</Moment>{" "}
                </span>
              </div>
              <div className="col">
                <span className="blockquote-footer ml-auto d-block text-right">
                  Tags :{" "}
                  {tags &&
                    tags.map((tag) => (
                      <Fragment>
                        <a
                          href="#"
                          className="btn badge badge-danger text-white"
                        >
                          {tag}
                        </a>{" "}
                      </Fragment>
                    ))}
                </span>
              </div>
            </div>
            <hr />

            <div className="card my-3 blog-post">
              <div className="card-body p-5">
                <div className="row mb-3 blog-paragraph">
                  {/* TODO implement images
                    <div className="col-lg-5 text-center">
                      <img
                        className=""
                        src="https://source.unsplash.com/random/301x200"
                        alt=""
                      />
                    </div> */}
                  <div className="col">
                    <p className="card-text my-2">{body}</p>
                  </div>
                </div>
              </div>
            </div>

            <PrivateComponent>
              <Link
                to={`/blog/blog-post/${id}/edit`}
                className="btn btn-go d-block btn-lg mb-3"
              >
                Edit this post
              </Link>
            </PrivateComponent>
            <Link to="/blog" className="btn btn-go d-block btn-lg">
              Go back to all posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBlogPost.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(SingleBlogPost);
