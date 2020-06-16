import React from "react";

const CategoriesList = () => {
  return (
    <React.Fragment>
      <div className="search">
        <input type="text" placeholder="Title, Subject..." />
      </div>
      <div className="pupular-subject">
        <h4>Popualr Subject</h4>
        <ul>
          <li>Biographies & memoirs</li>
          <li>Business & Money</li>
          <li>Children's Books</li>
          <li>Computers & Technology</li>
          <li>Parenting & Families</li>
        </ul>
      </div>
      <div className="fiction">
        <h4>Fiction</h4>
        <ul>
          <li>Adult</li>
          <li>Children's & Young</li>
          <li>General Fiction</li>
          <li>Literature & Fiction</li>
        </ul>
      </div>
      <div className="non-fiction">
        <h4>Non-Fiction</h4>
        <ul>
          <li>Archaeology</li>
          <li>Architecture</li>
          <li>Business & Economics</li>
          <li>Politics & Social Sciences</li>
          <li>Current Events</li>
        </ul>
      </div>
      <div className="puplic">
        <h4>Puplic</h4>
        <ul>
          <li>Biographies & memoirs</li>
          <li>Business & Money</li>
          <li>Children's Books</li>
          <li>Computers & Technology</li>
          <li>Parenting & Families</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default CategoriesList;
