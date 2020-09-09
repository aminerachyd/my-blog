import React from "react";
import { HomepageBlogPost } from "./HomepageBlogPost";

export const HomepageLeft = () => {
  return (
    <div className="col-md-8" id="blogsArea">
      <div className="row">
        <div className="col">
          <div className="container ml-auto">
            <h2 className="display-4">Recent Posts</h2>
            <hr />
            <HomepageBlogPost />
            <HomepageBlogPost />
            <HomepageBlogPost />
          </div>
          <a href="#" className="btn btn-go d-block btn-lg mt-5 mb-4">
            Check all posts
          </a>
        </div>
      </div>
    </div>
  );
};
