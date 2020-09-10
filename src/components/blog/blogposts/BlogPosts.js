import React, { Fragment } from "react";
import { BlogPost } from "./BlogPost";

export const BlogPosts = () => {
  return (
    <Fragment>
      <h2 className="display-4">All Posts</h2>
      <hr />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </Fragment>
  );
};
