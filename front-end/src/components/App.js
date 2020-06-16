import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserLogIn from "./layout/UserLogIn";
import UserNotLogIn from "./layout/UserNotLogIn/UserNotLogIn";
import { userInfoAndStatus } from "../store/actions/UserActions";
import Header from "./layout/Header/Header";
import Loading from "./layout/Loading";

function App({ getUserInfoAndStatus, userStatus }) {
  // check is user is LogIn
  useEffect(() => {
    getUserInfoAndStatus();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {userStatus === null ? (
          <Loading />
        ) : userStatus === undefined ? (
          <UserNotLogIn />
        ) : (
          <UserLogIn />
        )}
      </div>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfoAndStatus: () => dispatch(userInfoAndStatus()),
  };
};

const mapStateToProps = (state) => {
  return {
    userStatus:
      state.userState.user === null
        ? null
        : state.userState.user === undefined
        ? undefined
        : true,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
