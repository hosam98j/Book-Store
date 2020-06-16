import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserAllBooks } from "../../../../store/actions/UserActions";
import Book from "../../Book";

const AllBooks = ({ getUserAllBooks, Books }) => {
  useEffect(() => {
    getUserAllBooks();
  }, []);

  return (
    <div>
      {Books
        ? Books.map((book) => <Book book={book} key={book._id} />)
        : "Loading"}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAllBooks: () => dispatch(getUserAllBooks()),
  };
};
const mapStateToProps = (state) => {
  return {
    Books: state.booksState.books,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);
