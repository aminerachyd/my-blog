import React from "react";

export const Project = () => {
  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src="https://source.unsplash.com/random/300x200"
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">Project 1</h4>
        <p className="cad-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          eligendi? Rem vero modi quod! Dolorem minus enim incidunt nemo saepe?
        </p>
        <a href="#" className="btn btn-go d-block">
          Checkout
        </a>
      </div>
    </div>
  );
};
