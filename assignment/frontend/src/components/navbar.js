import React from "react";
import { Link } from "react-router-dom";

const navbar = props => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark ">
      <a href="/" className="navbar-brand">
        NVisionX
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/vision" className="nav-link">
            Vision and Mission
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/request">
            Request
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
