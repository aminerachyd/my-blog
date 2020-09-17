import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { BlogPostPreview } from "../../blog/blogposts/BlogPostPreview";

// Redux
import { connect } from "react-redux";
import { getPosts } from "../../../actions/postActions";

const HomepagePosts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    // TODO fetch stuff from the backend
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Fragment>Posts Loading</Fragment>
  ) : (
    <Fragment>
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

HomepagePosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(HomepagePosts);
