import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="profile-navbar">
      <li>
        <NavLink to="/myProfile/allbooks">All Books</NavLink>
      </li>
      <li>
        <NavLink to="/myProfile/books_selled">Books Selled</NavLink>
      </li>
      <li>
        <NavLink to="/myProfile/books_buyed">Books Buyed</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
