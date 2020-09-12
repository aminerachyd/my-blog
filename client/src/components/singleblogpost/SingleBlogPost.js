import React from "react";
import { Link } from "react-router-dom";

export const SingleBlogPost = () => {
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="row">
          <div className="col">
            <div className="container">
              <h2 className="display-4">Blog post 1</h2>
              <div className="row">
                <div className="col">
                  <span className="h4 d-block"> Last updated : Jul 20 </span>
                </div>
                <div className="col">
                  <span className="blockquote-footer ml-auto d-block text-right">
                    Tags :{" "}
                    <a href="#" className="btn badge badge-danger text-white">
                      Tech
                    </a>{" "}
                    <a href="#" className="btn badge badge-primary text-white">
                      Divers
                    </a>{" "}
                    <a href="#" className="btn badge badge-success text-white">
                      Lifestyle
                    </a>
                  </span>
                </div>
              </div>
              <hr />

              <div className="card my-3 blog-post">
                <div className="card-body p-5">
                  <div className="row mb-3 blog-paragraph">
                    <div className="col-lg-5 text-center">
                      <img
                        className=""
                        src="https://source.unsplash.com/random/301x200"
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <p className="card-text my-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Autem qui harum ab? Unde numquam nulla eius animi
                        assumenda recusandae quasi explicabo magnam iure fugit?
                        Fugiat, voluptas! Autem modi cumque fuga esse nesciunt
                        veritatis error eligendi dolor labore. Sed asperiores
                        distinctio reprehenderit adipisci iusto, voluptates
                        omnis nemo eveniet nulla eius itaque.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3 blog-paragraph">
                    <div className="col-lg-5 order-2 text-center">
                      <img
                        src="https://source.unsplash.com/random/300x200"
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <p className="card-text my-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Autem qui harum ab? Unde numquam nulla eius animi
                        assumenda recusandae quasi explicabo magnam iure fugit?
                        Fugiat, voluptas! Autem modi cumque fuga esse nesciunt
                        veritatis error eligendi dolor labore. Sed asperiores
                        distinctio reprehenderit adipisci iusto, voluptates
                        omnis nemo eveniet nulla eius itaque.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3 blog-paragraph">
                    <div className="col">
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Autem qui harum ab? Unde numquam nulla eius animi
                        assumenda recusandae quasi explicabo magnam iure fugit?
                        Fugiat, voluptas! Autem modi cumque fuga esse nesciunt
                        veritatis error eligendi dolor labore. Sed asperiores
                        distinctio reprehenderit adipisci iusto, voluptates
                        omnis nemo eveniet nulla eius itaque.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3 blog-paragraph">
                    <div className="col-lg-5 order-2 text-center">
                      <img
                        src="https://source.unsplash.com/random/500x400"
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <p className="card-text my-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Autem qui harum ab? Unde numquam nulla eius animi
                        assumenda recusandae quasi explicabo magnam iure fugit?
                        Fugiat, voluptas! Autem modi cumque fuga esse nesciunt
                        veritatis error eligendi dolor labore. Sed asperiores
                        distinctio reprehenderit adipisci iusto, voluptates
                        omnis nemo eveniet nulla eius itaque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/blog" className="btn btn-go d-block btn-lg">
                Go back to all posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
