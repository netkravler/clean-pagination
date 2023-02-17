import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="main_wrapper">

        <NavLink to="paginate">Pagination</NavLink>

      </nav>
    </header>
  );
};

export default Header;


