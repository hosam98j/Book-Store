import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="login-or-signup">
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, vel
          unde obcaecati ullam et molestias? Itaque rem voluptas vel odit, quo
          impedit dolorum dolor. Sint assumenda nisi excepturi vero
          perspiciatis.
        </h3>
        <div className="buttons">
          <button>
            <Link to="/user/login">Log in</Link>
          </button>
          <span>Or</span>
          <button>
            <Link to="/user/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
