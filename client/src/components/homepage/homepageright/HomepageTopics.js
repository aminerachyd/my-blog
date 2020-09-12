import React from "react";

export const HomepageTopics = () => {
  return (
    <div className="container mb-3">
      <h2 className="display-4 text-right">Topics</h2>
      <hr />
      <div className="d-flex flex-column row-hl">
        <button className="btn btn-primary btn-lg item-hl text-center my-2">
          Divers
        </button>
        <button className="btn btn-danger btn-lg item-hl text-center my-2">
          Tech
        </button>
        <button className="btn btn-success btn-lg item-hl text-center my-2">
          Lifestyle
        </button>
      </div>
    </div>
  );
};
