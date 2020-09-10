import React from "react";
import { BlogPostPreview } from "../../blog/blogposts/BlogPostPreview";
import { Link } from "react-router-dom";

export const HomepageLeft = () => {
  return (
    <div className="col-md-8" id="blogsArea">
      <div className="row">
        <div className="col">
          <div className="container ml-auto">
            <h2 className="display-4">Recent Posts</h2>
            <hr />
            <BlogPostPreview />
            <BlogPostPreview />
            <BlogPostPreview />
          </div>
          <Link to="/blog" className="btn btn-go d-block btn-lg mt-5 mb-4">
            Check all posts
          </Link>
        </div>
      </div>
    </div>
  );
};
