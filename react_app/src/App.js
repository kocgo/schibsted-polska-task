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

  return (
    <div styleName="App">
      <div styleName="App__inner">
        <SearchBox
          searchResults={searchResults}
          setOffset={setOffset}
          setSearchResults={setSearchResults}
        />

        <ResultsViewer searchResults={searchResults} />
        <InfiniteLoader />
      </div>
    </div>
  );
};

export default App;
