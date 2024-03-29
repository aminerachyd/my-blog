import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogPostPreview } from "./BlogPostPreview";
import PropTypes from "prop-types";

// Redux
import { connect, useSelector } from "react-redux";
import { getPosts } from "../../../actions/postActions";
import PrivateComponent from "../../routing/PrivateComponent";
import Spinner from "../../layout/spinner/Spinner";

const BlogPosts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const search = useSelector((state) => state.post.search);

  return (
    <Fragment>
      <Fragment>
        <h2 className="display-4">{search ? "Searched Posts" : "All Posts"}</h2>{" "}
        <hr />
        <PrivateComponent>
          <Link to="/blog/new-post" className="btn btn-primary btn-block">
            Add New Post
          </Link>
        </PrivateComponent>
        {loading ? (
          <Spinner></Spinner>
        ) : !search ? (
          posts.map((post) => <BlogPostPreview key={post.id} post={post} />)
        ) : (
          posts
            .filter((post) =>
              post.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((post) => <BlogPostPreview key={post.id} post={post} />)
        )}{" "}
      </Fragment>
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
