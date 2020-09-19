import React from "react";

export const HomepageAuthorInfo = () => {
  const authorInfo =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima a porro excepturi eos reiciendis ratione dicta repellat corrupti eius tempora.";

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
