import React from "react";

const SellerCard = ({ seller }) => {
  const { img, allbooks } = seller;
  return (
    <div className="seller-card">
      <div className="seller-img">
        <img src={img} alt="" />
      </div>
      <div className="seller-info">
        <div className="info">
          <span>All Seller Books</span>
          <span>{allbooks}</span>
        </div>
        <div className="info">
          <span>Books Bued</span>
          <span>300</span>
        </div>
        <div className="info">
          <span>Books Selling</span>
          <span>300</span>
        </div>
        <div className="info">
          <span>Follwers</span>
          <span>300</span>
        </div>
        <div className="info">
          <span>Following</span>
          <span>300</span>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
