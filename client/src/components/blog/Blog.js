import React from "react";
import PostSearch from "./PostSearch";
import BlogPosts from "./blogposts/BlogPosts";

export const Blog = () => {
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col">
          <div className="container ml-auto">
            <PostSearch />
            <BlogPosts />
          </div>
        </div>
      </div>
    </div>
  );
};
