import React, { useRef, useEffect } from "react";
import styles from "./InfiniteLoader.css";

const InfiniteLoader = () => {
  const infiniteLoaderElement = useRef(null);

  const observerSettings = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log("seen the infiniteLoader"), observerSettings;
    });

    if (infiniteLoaderElement.current) {
      observer.observe(infiniteLoaderElement.current);
    }
  }, []);

  return <div ref={infiniteLoaderElement}>this is infinite loader</div>;
};

export default InfiniteLoader;
