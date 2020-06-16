import React from "react";
import { li, NavLink } from "react-router-dom";

const SignUpButton = () => {
  return (
    <li>
      <NavLink to="/user/signup">Sign up</NavLink>
    </li>
  );
};

export default SignUpButton;
