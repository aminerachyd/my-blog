import React, { Fragment, useEffect } from "react";
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
      <Fragment>Posts Loading</Fragment>
    </Fragment>
  ) : (
    <Fragment>
      <h2 className="display-4">All Posts</h2>
      <hr />
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
