import React from "react";
import Home from ".././routes/Home";
import UserCollections from ".././routes/UserCollections";
import UserProfile from ".././routes/UserProfile";
import WishList from ".././routes/WishList";
import { Route } from "react-router-dom";
import SideArea from "./SideArea";
import BestSeller from "../routes/BestSellers";

const UserLogIn = () => {
  return (
    <div className="container">
      <SideArea />
      <div className="main-area-container">
        <Route exact path="/" component={Home} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/myCollections" component={UserCollections} />
        <Route path="/myProfile" component={UserProfile} />
        <Route path="/best_seller" component={BestSeller} />
      </div>
    </div>
  );
};

export default UserLogIn;
