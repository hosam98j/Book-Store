import React from "react";
import { NavLink } from "react-router-dom";

const UserLinks = () => {
  return (
    <ul className="header-links">
      <li>
        <NavLink exact to="/">
          Book store
        </NavLink>
      </li>
      <li>
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
      <li>
        <NavLink to="/myCollections">My Collection</NavLink>
      </li>
    </ul>
  );
};

export default UserLinks;
