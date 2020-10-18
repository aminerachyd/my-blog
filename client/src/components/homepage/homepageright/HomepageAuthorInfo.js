import React from "react";

export const HomepageAuthorInfo = () => {
  const authorInfo =
    "Hello there, my name is Amine and I am currently a software engineering student who just recently got into web development";

  return (
    <div className="container mb-3">
      <h2 className="display-4 text-right">Who Am I ?</h2>
      <hr />
      <p className="text-center" id="authorInfo">
        {authorInfo}
      </p>
      {/* <button className="btn btn-go d-block btn-lg w-100">Edit</button> */}
    </div>
  );
};
