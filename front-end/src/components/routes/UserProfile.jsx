import React from "react";
import { Route } from "react-router-dom";
import AddNewBook from "../layout/UserProfile/AddNewBook";
import CurrentPrice from "../layout/UserProfile/CurrentPrice";
import CurrentState from "../layout/UserProfile/CurrentState";
import NavBar from "../layout/UserProfile/NavBar";
import AllBooks from "../layout/UserProfile/routes/AllBooks";
import BooksBuyed from "../layout/UserProfile/routes/BooksBuyed";
import BooksSelled from "../layout/UserProfile/routes/BooksSelled";
import HightRatedBooks from "../layout/UserProfile/HightRatedBooks";

const UserProfile = () => {
  return (
    <div className="profile">
      <Route exact path="/myProfile/addbook" component={AddNewBook} />
      <div className="header">
        <CurrentState />
        <CurrentPrice />
      </div>
      <div className="profile-content">
        <div className="books">
          <NavBar />
          <Route path="/myProfile" component={AllBooks} />
          <Route path="/myProfile/books_selled" component={BooksSelled} />
          <Route path="/myProfile/books_buyed" component={BooksBuyed} />
        </div>
        <div className="top-books">
          <HightRatedBooks />
          <HightRatedBooks />
          <HightRatedBooks />
          <HightRatedBooks />
          <HightRatedBooks />
          <HightRatedBooks />
          <HightRatedBooks />
          <HightRatedBooks />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
