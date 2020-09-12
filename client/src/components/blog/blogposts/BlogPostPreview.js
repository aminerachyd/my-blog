import React from "react";
import { Link } from "react-router-dom";

export const BlogPostPreview = () => {
  return (
    <div className="card my-3 blog-post">
      <div className="card-body p-5">
        <h3 className="card-title">Blog post 1</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem qui
          harum ab? Unde numquam nulla eius animi assumenda recusandae quasi
          explicabo magnam iure fugit? Fugiat, voluptas! Autem modi cumque fuga
          esse nesciunt veritatis error eligendi dolor labore. Sed asperiores
          distinctio reprehenderit adipisci iusto, voluptates omnis nemo eveniet
          nulla eius itaque.
        </p>
        <Link className="btn btn-light btn-lg float-right" to="/blog/blog-post">
          Read More
        </Link>
        <Link
          className="btn btn-go d-block btn-lg float-right"
          to="/blog/blog-post"
        >
          Edit
        </Link>
      </div>
      <footer className="card-footer p-3">
        <footer className="blockquote-footer">
          <span>Last updated : Jul 20 </span>
        </footer>
        <span className="blockquote-footer ml-auto d-block text-right">
          Tags :{" "}
          <a href="#" className="btn badge badge-primary text-white">
            Divers
          </a>{" "}
          <a href="#" className="btn badge badge-danger text-white">
            Tech
          </a>{" "}
          <a href="#" className="btn badge badge-success text-white">
            Lifestyle
          </a>
        </span>
      </footer>
    </div>
  );
};
