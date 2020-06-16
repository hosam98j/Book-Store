import React from "react";
import { Route } from "react-router-dom";
import LogIn from "../../routes/auth/LogIn";
import SignUp from "../../routes/auth/SignUp";
import Welcome from "./routes/Welcome";

const UserNotLogIn = () => {
  return (
    <div className="user-not-log-in">
      <Route path="/" component={Welcome} />
      <Route path="/user/login" component={LogIn} />
      <Route path="/user/signup" component={SignUp} />
    </div>
  );
};

export default UserNotLogIn;
