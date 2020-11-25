import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class MainNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Vidly-App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/movies">
                Movies <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rentals">
                Rental
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to="/loginForm">
                <i className="fa fa-sign-in mx-1 " aria-hidden="true"></i>
                Login
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to="/registerForm">
                <i className="fa fa-database mx-1" aria-hidden="true"></i>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNav;
