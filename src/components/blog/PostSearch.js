import React, { Fragment } from "react";

export const PostSearch = () => {
  return (
    <Fragment>
      <h2 className="display-4">Looking for something specific ?</h2>
      <hr />
      <div className="input-group form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Type Some Keywords"
        />
        <div className="input-group-append">
          <button className="btn btn-go" type="button">
            Search
          </button>
        </div>
      </div>
      <div className="input-group form-group justify-content-center">
        <span className="h3">Tags :</span>
        <div className="btn-group ml-2 align-self-start">
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="button"
          >
            Divers
          </button>
          <button className="btn btn-danger" type="button" data-toggle="button">
            Tech
          </button>
          <button
            className="btn btn-success"
            type="button"
            data-toggle="button"
          >
            Lifestyle
          </button>
        </div>
      </div>
    </Fragment>
  );
};
