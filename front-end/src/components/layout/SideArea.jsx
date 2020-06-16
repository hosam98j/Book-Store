import React from "react";
import CategoriesList from "./CategoriesList";
import { Route } from "react-router-dom";
import UserCard from "./UserCard";

const SideArea = () => {
  return (
    <aside className="side-area">
      <Route exact path="/" component={CategoriesList} />
      <Route path="/myProfile" component={UserCard} />
    </aside>
  );
};

export default SideArea;
