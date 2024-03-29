import React from "react";

export const AboutParagraph = ({ paragraph: { id, image, order, text } }) => {
  return (
    <div className="row blog-paragraph">
      {text && (
        <div className="col">
          <p className="card-text my-2">{text}</p>
        </div>
      )}
      {image && (
        <div className="col-lg-5 text-center">
          <img className="ml-auto mr-auto" src={image} alt="" />
        </div>
      )}
    </div>
  );
};
