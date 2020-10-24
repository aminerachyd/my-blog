import React from "react";

import HomepagePosts from "./HomepagePosts";
import { Link } from "react-router-dom";

const HomepageLeft = () => {
  return (
    <div className="col-md-8" id="blogsArea">
      <div className="row">
        <div className="col">
          <div className="container ml-auto">
            <h2 className="display-4">Recent Posts</h2>
            <hr />
            <HomepagePosts />
          </div>
          <Link to="/blog" className="btn btn-go d-block btn-lg mt-5 mb-4">
            Check all posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomepageLeft;
