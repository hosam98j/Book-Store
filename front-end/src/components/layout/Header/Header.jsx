import React from "react";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import UserLinks from "./UserLinks";
import UserAuthLinks from "./UserAuthLinks";
import Logo from "./Logo";
import menuIcon from "../../../assets/icons/011-menu-3.svg";

const Header = ({ userStatus }) => {
  const expandMenu = () => {
    const ele = document.querySelector(".side-menu");
    ele.classList.toggle("expand");
    console.log("expand");
  };
  return (
    <header className="app-header">
      <Logo />
      {userStatus ? <UserLinks /> : ""}
      <UserAuthLinks userStatus={userStatus} />
      {userStatus ? <UserInfo /> : ""}
      <button className="side-menu-button" onClick={expandMenu}>
        <img src={menuIcon} alt="" />
      </button>
      <div className="side-menu"></div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    userStatus: Boolean(state.userState.user),
  };
};

export default connect(mapStateToProps)(Header);
