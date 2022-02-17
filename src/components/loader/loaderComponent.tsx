import * as React from "react";
import "./loaderComponent.css";

const Loader = React.memo(() => {
  // console.log("Loading...");
  return (
    <div className="loader">
      <h1 className="loader__title">Auction</h1>
      <div className={"loader__icon"}>
        <span className="loader__ball loader__ball--1" />
        <span className="loader__ball loader__ball--2" />
        <span className="loader__ball loader__ball--3" />
      </div>
    </div>
  );
});

export default Loader;
