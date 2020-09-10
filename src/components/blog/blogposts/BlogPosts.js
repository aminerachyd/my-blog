import React, { Fragment } from "react";
import { BlogPostPreview } from "./BlogPostPreview";

export const BlogPosts = () => {
  return (
    <Fragment>
      <h2 className="display-4">All Posts</h2>
      <hr />
      <BlogPostPreview />
      <BlogPostPreview />
      <BlogPostPreview />
    </Fragment>
  );
};
