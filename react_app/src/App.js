import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";
import "./Reset.css?raw";

import SearchBox from "./Components/SearchBox/SearchBox";
import ResultsViewer from "./Components/ResultsViewer/ResultsViewer";
import InfiniteLoader from "./Components/InfiniteLoader/InfiniteLoader";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div styleName="App">
      <div styleName="App__inner">
        <SearchBox
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ResultsViewer searchResults={searchResults} />
        {/* <InfiniteLoader
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          searchQuery={searchQuery}
          offset={offset}
          setOffset={setOffset}
        /> */}
      </div>
    </div>
  );
};

export default App;
