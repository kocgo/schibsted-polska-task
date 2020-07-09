import React, { useState } from "react";
import { searchImages } from "../../Requests/searchImages";
import { debounce } from "../../helperFunctions";
import styles from "./SearchBox.css";

const SearchBox = () => {
  // Debounce Search Input
  let debouncedInputChange = debounce((searchTerm) => {
    if (!searchTerm) return;
    searchImages(searchTerm);
  }, 500);

  return (
    <div styleName="wrapper">
      <span>Please enter a query to search:</span>
      <div tabIndex={0} styleName="searchInput">
        <input
          onChange={(e) => debouncedInputChange(e.target.value)}
          styleName="searchInput__input"
          type="text"
        ></input>
      </div>
    </div>
  );
};

export default SearchBox;
