import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="container content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>Oops! Page not found</p>
          <div className="btn">
            <Link to="/">return home</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
