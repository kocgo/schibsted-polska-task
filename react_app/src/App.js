import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";
import "./Reset.css?raw";

import SearchBox from "./Components/SearchBox/SearchBox";

const App = () => {
  return (
    <div styleName="App">
      <div styleName="App__inner">
        <SearchBox />
      </div>
    </div>
  );
};

export default App;
