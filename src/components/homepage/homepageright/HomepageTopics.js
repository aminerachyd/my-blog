import React from "react";

export const HomepageTopics = () => {
  return (
    <div className="container mb-3">
      <h2 className="display-4 text-right">Topics</h2>
      <hr />
      <div className="d-flex flex-column row-hl">
        <btn className="btn btn-primary btn-lg item-hl text-center my-2">
          Divers
        </btn>
        <btn className="btn btn-danger btn-lg item-hl text-center my-2">
          Tech
        </btn>
        <btn className="btn btn-success btn-lg item-hl text-center my-2">
          Lifestyle
        </btn>
      </div>
    </div>
  );
};
