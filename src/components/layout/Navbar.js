import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top">
      <div className="container">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse px-5 py-" id="navbarCollapse">
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
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-2">
              <a href="#" className="nav-link">
                <i className="fab fa-facebook nav-icon"></i>
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="#" className="nav-link">
                <i className="fab fa-instagram nav-icon"></i>
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="#" className="nav-link">
                <i className="fab fa-twitter nav-icon"></i>
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  );
};
