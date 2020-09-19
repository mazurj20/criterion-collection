import React from "react";
import "./Header.css";
import AddIcon from "@material-ui/icons/Add";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft"></div>
      <div className="headerCenter">
        <h1>Welcome to the Criterion Collection</h1>
      </div>
      <div className="headerRight">
        <h2>Filter</h2>
        <AddIcon />
      </div>
    </div>
  );
};
