import React from "react";
import styles from "./SearchBox.css";

const SearchBox = () => {
  return (
    <div styleName="wrapper">
      <span>Please enter a query to search:</span>
      <div tabIndex={0} styleName="searchInput">
        <input styleName="searchInput__input" type="text"></input>
      </div>
    </div>
  );
};

export default SearchBox;
