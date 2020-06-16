import React from "react";
import star from "../../../assets/icons/015-star.svg";
import avatar from "../../../assets/imgs/avatar.jpg";

const HightRatedBooks = () => {
  return (
    <div className="hight-rated-books">
      <img src={avatar} alt="" />
      <div className="book-details-container">
        <h4>The art of war</h4>
        <div className="book-details">
          <div className="book-rated">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <h5>200$</h5>
        </div>
      </div>
    </div>
  );
};

export default HightRatedBooks;
