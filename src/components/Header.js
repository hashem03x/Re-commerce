import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/header.css";
function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Re-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
