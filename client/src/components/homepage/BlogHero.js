import React from "react";

export const BlogHero = () => {
  return (
    <section id="blogName" className="py-5 mb-5">
      <div className="dark-overlay">
        <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
          <div className="col">
            <div className="container pt-4 pb-5">
              <h1 className="display-3 pt-5 m-5">My Blog</h1>
              <p className="lead mt-3 d-none d-sm-block pb-2">
                Because writing with a pen is kinda overrated
                <br></br>
                Still a work in progress...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
