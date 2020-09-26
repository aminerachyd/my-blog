import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogPostPreview } from "./BlogPostPreview";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getPosts } from "../../../actions/postActions";

const BlogPosts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Fragment>
      <h2 className="display-4">All Posts</h2>
      <hr />
      <Link to="/blog/new-post" className="btn btn-primary btn-block">
        Add New Post
      </Link>
      <Fragment>Posts Loading</Fragment>
    </Fragment>
  ) : (
    <Fragment>
      <h2 className="display-4">All Posts</h2> <hr />
      <a href="/blog/new-post" className="btn btn-primary btn-block">
        Add New Post
      </a>
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

BlogPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(BlogPosts);
