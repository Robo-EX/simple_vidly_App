import React from "react";

const NavBar = ({ totalCounter }) => {
  return (
    <nav id="navradius" className="navbar navbar-dark  my-2 rounded-pill">
      <span className="navbar-brand font-italic fa ">
        Showing {totalCounter} movies in database
      </span>
    </nav>
  );
};

export default NavBar;
