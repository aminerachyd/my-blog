import React, { Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const truncate = (string, no_words) => {
  return string.split(" ").splice(0, no_words).join(" ");
};

export const BlogPostPreview = ({
  post: { id, title, body, lastUpdated, tags },
}) => {
  return (
    <div className="card my-3 blog-post">
      <div className="card-body p-5">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
          {body.length > 20 ? `${truncate(body, 20)} ...` : body}
        </p>
        <Link
          className="btn btn-light btn-lg float-right"
          to={"/blog/blog-post/" + id}
        >
          Read More
        </Link>
      </div>
      <footer className="card-footer p-3">
        <footer className="blockquote-footer">
          <span>
            Last updated : <Moment format="DD/MM/YYYY">{lastUpdated}</Moment>{" "}
          </span>
        </footer>
        <span className="blockquote-footer ml-auto d-block text-right">
          Tags :{" "}
          {tags.map((tag) => (
            <Fragment>
              <a href="#" className="btn badge badge-primary text-white">
                {tag}
              </a>{" "}
            </Fragment>
          ))}
        </span>
      </footer>
    </div>
  );
};

BlogPostPreview.propTypes = {
  id: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
};
