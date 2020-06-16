import React from "react";
import cart_outline from "../../../assets/icons/shopping-cart-out-line.svg";
import { connect } from "react-redux";

const Cart = ({ elements }) => {
  return (
    <div className="user-cart">
      <img src={cart_outline} alt="" />
      <span className="cart-content">{elements}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    elements: state.cartState.cart.length,
  };
};

export default connect(mapStateToProps)(Cart);
