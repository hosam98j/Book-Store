import React from "react";
import LogOutButton from "../LogOutButton";
import LogInButton from "../LogInButton";
import SignUpButton from "../SignUpButton";

const UserAuthLinks = ({ userStatus }) => {
  return (
    <ul className="user-auth-links">
      {userStatus ? (
        <LogOutButton />
      ) : (
        <React.Fragment>
          <LogInButton />
          <SignUpButton />
        </React.Fragment>
      )}
    </ul>
  );
};

export default UserAuthLinks;
