import React, { useState } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

const Login = ({ auth, loginUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    // TODO onChange here
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    // TODO onSubmit here
    e.preventDefault();
    console.log(email, password);
    loginUser(email, password);
  };

  return (
    <div className="container my-5">
      <h2 className="display-4 text-center">Login</h2>
      <hr />
      <div className="card search-area">
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email Here"
                name="email"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password Here"
                name="password"
                onChange={(e) => onChange(e)}
              />
            </div>
            <input
              type="submit"
              className="btn btn-block btn-lg btn-go float-right"
              value="Login"
            />
            <a className="btn btn-block btn-lg btn-go float-right">
              Create An Admin Account
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
