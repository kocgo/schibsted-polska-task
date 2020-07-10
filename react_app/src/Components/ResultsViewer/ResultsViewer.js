import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ResultsViewer.css";

const ResultsViewer = ({ searchResults }) => {
  return (
    <div styleName="wrapper">
      {searchResults?.map((imageURL) => {
        return (
          <div key={imageURL} styleName="frame">
            <LazyLoadImage
              src={imageURL} // use normal <img> attributes as props
            />
          </div>
        );
      })}
    </div>
  );
};

export default ResultsViewer;
