import React, { useState } from "react";
import { searchImages } from "../../Requests/searchImages";
import { debounce } from "../../helperFunctions";
import styles from "./SearchBox.css";

const SearchBox = ({ setSearchResults, setSearchQuery }) => {
  let offset = 0;
  // Debounce Search Input
  let debouncedInputChange = debounce(async (searchTerm) => {
    if (!searchTerm) return;

    let results = await searchImages(searchTerm, offset);
    setSearchQuery(searchTerm);
    setSearchResults(results || []);
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
