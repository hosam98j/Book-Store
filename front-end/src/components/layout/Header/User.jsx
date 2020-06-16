import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const User = ({ info }) => {
  const name = info && info.name;
  const avatar = info && info.avatar;

  return (
    <Link to="/myProfile">
      <div className="user-profile">
        <div className="user-img">
          <img src={avatar} alt="" />
        </div>
        <span className="hi">Hi, </span>
        <span>{name}</span>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    info: state.userState.user,
  };
};

export default connect(mapStateToProps)(User);
