import React from "react";
import star from "../../assets/icons/015-star.svg";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/UserActions";

const Book = ({ book, addToCart }) => {
  const { name, price, category, img, seller } = book;
  const handleAddToCart = () => {
    addToCart(book);
  };
  return (
    <div className="book">
      <div className="book-img">
        <img src={img} alt="" />
      </div>
      <div className="book-details">
        <h4 className="book-title">{name}</h4>
        <h6 className="book-category">{category}</h6>
        <div className="book-rate">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <span className="price">${price}</span>
        <span className="seller">{seller}</span>
        <div className="buy-book" onClick={handleAddToCart}>
          Add To Cart
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (book) => dispatch(addToCart(book)),
  };
};

export default connect(null, mapDispatchToProps)(Book);
