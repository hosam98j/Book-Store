import React from "react";
import grid from "../../assets/icons/008-menu-1.svg";
import menu from "../../assets/icons/007-menu.svg";
import { connect } from "react-redux";
import { changeViewType } from "../../store/actions/UiActions";

const ViewType = ({ changeViewType }) => {
  return (
    <div className="view-type-container">
      <div className="view-type">
        <div className="grid" onClick={() => changeViewType("row")}>
          <img src={grid} alt="" />
        </div>
        <div className="menu" onClick={() => changeViewType("column")}>
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeViewType: (type) => dispatch(changeViewType(type)),
  };
};

export default connect(null, mapDispatchToProps)(ViewType);
