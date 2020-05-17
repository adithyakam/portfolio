import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-light bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container w-75">
        <a className="navbar-brand" href="home">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {/* <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a> */}
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/Skills" className="nav-item nav-link ">
              Skill
            </Link>
            <Link to="/project" className="nav-item nav-link ">
              project
            </Link>
            <Link to="/Contact" className="nav-item nav-link ">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
