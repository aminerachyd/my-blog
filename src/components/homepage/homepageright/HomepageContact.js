import React from "react";

export const HomepageContact = () => {
  return (
    <div className="container mb-3">
      <h2 className="display-4 text-right">Contact me</h2>
      <hr />
      <div className="card search-area">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input className="form-control" type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn btn-block btn-lg btn-go float-right">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
