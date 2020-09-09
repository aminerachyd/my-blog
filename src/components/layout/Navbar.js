import React from "react";

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
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="blog.html" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="about.html" className="nav-link">
                About
              </a>
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
