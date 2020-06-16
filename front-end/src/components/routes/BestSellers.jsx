import React from "react";
import SellerCard from "../layout/SellerCard";
import { useEffect } from "react";
import { getAllSellers } from "../../store/actions/DataActions";
import { connect } from "react-redux";

const BestSeller = ({ getAllSellers, sellers }) => {
  useEffect(() => {
    getAllSellers();
  }, []);

  return (
    <div className="best-seller">
      {!sellers.length
        ? "loading"
        : sellers.map((seller) => {
            return <SellerCard seller={seller} key={Math.random()} />;
          })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllSellers: () => dispatch(getAllSellers()),
  };
};

const mapStateToProps = ({ sellersState }) => {
  return {
    sellers: sellersState.sellers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);
