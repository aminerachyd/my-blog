import React from "react";

export const Footer = () => {
  return (
    <footer id="mainFooter" className="footer-bottom text-center p-4 mt-5">
      <div className="row">
        <div className="col">
          <div className="container">
            <p>
              Copyright &copy; <span id="year"></span> My Blog
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
