import React from "react";

export const HomepageSearchBar = () => {
  return (
    <div className="container mb-3">
      <h2 className="display-4 text-right">Search</h2>
      <hr />
      <div className="card search-area">
        <div className="card-body">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search ?"
              />
            </div>
            <button className="btn btn-block btn-lg btn-go float-right">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
