import React from "react";
import { NavLink } from "react-router-dom";

const LogInButton = () => {
  return (
    <li>
      <NavLink to="/user/login">Log in</NavLink>
    </li>
  );
};

export default LogInButton;
