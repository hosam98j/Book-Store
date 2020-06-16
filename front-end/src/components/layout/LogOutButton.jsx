import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/authActions";

const LogOutButton = ({ logUserOut, UserStatus }) => {
  return (
    <li>
      <button className="log-out-button" onClick={logUserOut}>
        Log out
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    UserStatus: Boolean(state.user),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOutButton);
