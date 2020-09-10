import React, { Fragment } from "react";

export const AboutMe = () => {
  return (
    <Fragment>
      <h2 className="display-4">About Me</h2>
      <hr />

      <div className="card my-3 blog-post">
        <div className="container card-body p-5">
          <div className="row blog-paragraph">
            <div className="col">
              <p className="card-text my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                qui harum ab? Unde numquam nulla eius animi assumenda recusandae
                quasi explicabo magnam iure fugit? Fugiat, voluptas! Autem modi
                cumque fuga esse nesciunt veritatis error eligendi dolor labore.
                Sed asperiores distinctio reprehenderit adipisci iusto,
                voluptates omnis nemo eveniet nulla eius itaque.
              </p>
            </div>
            <div className="col-lg-5 text-center">
              <img
                className="ml-auto mr-auto"
                src="https://source.unsplash.com/random/200x200"
                alt=""
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col order-2">
              <p className="card-text my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                eligendi magni iusto iure eius, eos porro a odit rerum numquam
                officia labore tempore quasi ipsum consequatur vero aliquam
                dicta accusantium. Quod porro, nesciunt dolorum odio libero ex
                cum error consectetur rerum quidem architecto iusto quisquam
                nihil sunt, minima molestiae explicabo? Repellat ipsam totam,
                qui quisquam quos quidem veritatis recusandae consequuntur sit
                saepe laborum nisi accusantium, cum distinctio adipisci illum,
                minima ab aliquid assumenda doloremque dolores molestias! Ullam
                porro veritatis id at, inventore saepe recusandae placeat!
                Corporis facilis ex ut cumque et quaerat perspiciatis voluptas
                cupiditate. Magnam ab iure vero alias.
              </p>
            </div>
            <div className="col-lg-5 text-center">
              <img src="https://source.unsplash.com/random/300x300" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
