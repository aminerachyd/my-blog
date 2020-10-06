import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPostPreview } from "./BlogPostPreview";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getPosts } from "../../../actions/postActions";
import PrivateComponent from "../../routing/PrivateComponent";

const BlogPosts = ({ getPosts, post: { posts, loading, search } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // TODO implementing search functionality
  // Search is transferred to store, cant pull it here
  const [itemsState, setItemsState] = useState({
    itemsToSearch: search,
  });

  return loading ? (
    <Fragment>
      <h2 className="display-4">All Posts</h2>
      <hr />
      <PrivateComponent>
        <Link to="/blog/new-post" className="btn btn-primary btn-block">
          Add New Post
        </Link>
      </PrivateComponent>
      <Fragment>Posts Loading</Fragment>
    </Fragment>
  ) : (
    <Fragment>
      {!itemsState.itemsToSearch ? (
        <Fragment>
          <h2 className="display-4">All Posts</h2> <hr />
          <PrivateComponent>
            <Link to="/blog/new-post" className="btn btn-primary btn-block">
              Add New Post
            </Link>
          </PrivateComponent>
          {posts.map((post) => (
            <BlogPostPreview key={post.id} post={post} />
          ))}{" "}
        </Fragment>
      ) : (
        <Fragment>
          <h1>Search items</h1>
        </Fragment>
      )}
    </Fragment>
  );
};

BlogPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  items: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(BlogPosts);
