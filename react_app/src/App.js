import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";
import "./Reset.css?raw";

import SearchBox from "./Components/SearchBox/SearchBox";
import ResultsViewer from "./Components/ResultsViewer/ResultsViewer";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div styleName="App">
      <div styleName="App__inner">
        <SearchBox
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />

        <ResultsViewer searchResults={searchResults} />
      </div>
    </div>
  );
};

export default App;
