import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <h2>Book Shop</h2>
      </Link>
    </div>
  );
};

export default Logo;
