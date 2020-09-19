import React from "react";
import PropTypes from "prop-types";

export const Project = ({
  project: { id, image, title, link, description },
}) => {
  return (
    <div className="card">
      {image && <img className="card-img-top img-fluid" src={image} alt="" />}
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="cad-text">{description}</p>
        {link && (
          <a href={link} className="btn btn-go d-block">
            Checkout
          </a>
        )}
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
