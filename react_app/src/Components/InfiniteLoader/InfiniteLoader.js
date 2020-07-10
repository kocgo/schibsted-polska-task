import React, { useRef, useEffect, useState } from "react";
import styles from "./InfiniteLoader.css";
import { searchImages } from "../../Requests/searchImages";

const InfiniteLoader = ({ searchQuery, offset, setOffset }) => {
  const infiniteLoaderElement = useRef(null);

  // (async () => {
  //
  // })();

  const incrementOffset = async () => {
    // Load More
    let newResults = await searchImages(searchQuery, offset);
    // Throttle
    setTimeout(() => {
      setOffset(offset + 20);
    }, 2000);
  };

  let myOffset = 0;

  // https://dev.to/somtougeh/building-infinite-scroll-in-react-with-hooks-and-intersection-observer-3e09

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.1) {
          console.log("seen the infiniteLoader");
          console.log(offset);
          setOffset((off) => off + 20);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    )
  );

  useEffect(() => {
    observer.current.unobserve(infiniteLoaderElement.current);

    // Observer initiate
    if (infiniteLoaderElement.current && searchQuery) {
      observer.current.observe(infiniteLoaderElement.current);
    }
  }, [searchQuery, offset]);

  return <div styleName={"wrapper"} ref={infiniteLoaderElement}></div>;
};

export default InfiniteLoader;
