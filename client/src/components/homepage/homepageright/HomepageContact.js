import React, { useState } from "react";

export const HomepageContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // TODO Send form data
  };

  return (
    <div className="container mb-3">
      <h2 className="display-4 text-right">Contact me</h2>
      <hr />
      <div className="card search-area">
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea
                className="form-control"
                placeholder="Message"
                name="message"
                onChange={(e) => onChange(e)}
              ></textarea>
            </div>
            <input
              type="submit"
              className="btn btn-block btn-lg btn-go float-right"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
