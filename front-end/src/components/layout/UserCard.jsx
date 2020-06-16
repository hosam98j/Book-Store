import React from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/icons/001-menu.svg";
import { connect } from "react-redux";

const UserCard = ({ user }) => {
  const { name, avatar } = user;
  return (
    <div className="user-card">
      <div className="card-header">
        <h5>INFO</h5>
        <div>
          <img src={menu} alt="" />
        </div>
      </div>
      <div className="user-info">
        <img src={avatar} alt="" />
        <div className="user-name">
          <h4>{name}</h4>
          <h6>Designer</h6>
        </div>
      </div>
      <div className="user-about">
        <ul>
          <li>
            <h4>Gender</h4>
            <h4>Male</h4>
          </li>
          <li>
            <h4>Age</h4>
            <h4>22 Y/O</h4>
          </li>
          <li>
            <h4>Country</h4>
            <h4>Sudan</h4>
          </li>
        </ul>
        <button>
          <Link to="/myProfile/addbook">Add New Book</Link>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(UserCard);
