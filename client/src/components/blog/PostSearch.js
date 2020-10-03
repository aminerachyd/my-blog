import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const PostSearch = ({ searchItems }) => {
  const [searchInput, setSearchInput] = useState({
    search: "",
  });

  const { search } = searchInput;

  const onChange = (e) => {
    e.preventDefault();
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value,
    });
    searchItems(search);
  };

  return (
    <Fragment>
      <h2 className="display-4">Looking for something specific ?</h2>
      <hr />
      <div className="input-group form-group">
        <input
          onChange={(e) => onChange(e)}
          className="form-control"
          type="text"
          placeholder="Type Some Keywords"
          name="search"
        />
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

PostSearch.propTypes = {
  searchItems: PropTypes.func.isRequired,
};

export default PostSearch;
