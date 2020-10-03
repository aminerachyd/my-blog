import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import PrivateComponent from "../routing/PrivateComponent";
import { logoutUser } from "../../actions/authActions";

const Navbar = ({ auth, logoutUser }) => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse px-5 " id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <PrivateComponent>
              <li className="px-2 mt-1">
                <a className="btn btn-go" onClick={(e) => logoutUser()}>
                  Logout
                </a>
              </li>
            </PrivateComponent>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-2">
              <a
                href="https://www.facebook.com/aminerachyd13"
                target="_"
                className="nav-link"
              >
                <i className="fab fa-facebook nav-icon"></i>
              </a>
            </li>
            <li className="nav-item px-2">
              <a
                href="https://www.instagram.com/amine_rachyd/"
                target="_"
                className="nav-link"
              >
                <i className="fab fa-instagram nav-icon"></i>
              </a>
            </li>
            <li className="nav-item px-2">
              <a
                href="https://twitter.com/RachydAmine"
                target="_"
                className="nav-link"
              >
                <i className="fab fa-twitter nav-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
