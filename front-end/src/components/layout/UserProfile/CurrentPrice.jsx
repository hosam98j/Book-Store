import React from "react";
import menu from "../../../assets/icons/001-menu.svg";

const CurrentPrice = () => {
  return (
    <div className="current-price">
      <div className="header">
        <h5>Current price</h5>
        <div>
          <img src={menu} alt="" />
        </div>
      </div>
      <div>$200/houre</div>
    </div>
  );
};

export default CurrentPrice;
