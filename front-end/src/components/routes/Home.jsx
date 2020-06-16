import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Book from "../layout/Book";
import ViewType from "../layout/VeiwType";
import { connect } from "react-redux";
import { getData } from "../../store/actions/UserActions";

const Home = ({ getData, books, viewType }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="Home">
      <header>
        <ul>
          <li className="active">For You</li>
          <li>New Releases</li>
          <li>
            <Link to="/best_seller">Amazon Best Seller</Link>
          </li>
        </ul>
        <ViewType />
      </header>
      <div className="content" style={{ flexDirection: viewType }}>
        {!books
          ? "loading"
          : books.map((book) => <Book book={book} key={book._id} />)}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.booksState.books,
    viewType: state.uiState.viewType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
