import React from "react";
import styles from "./TitleBar.module.scss";

const TitleBar = (props) => {
  const closeHandler = () => {
    props.changeWindow("closed");
    console.log("Action");
  };
  const minimiseHandler = () => {
    props.changeWindow("minimised");
    console.log("Action");
  };
  const expandHandler = () => {
    props.changeWindow("expanded");
    console.log("Action");
  };
  return (
    <div className={`${styles["title-bar"]} window-handle`}>
      <div className={styles["title-bar-controls"]}>
        <button
          className={`${styles["red"]}`}
          onClick={closeHandler}
          onTouchStart={closeHandler}
        ></button>

        {props.activeWindowControl === "expanded" ? (
          <button className={`${styles["disabled"]}`}></button>
        ) : (
          <button
            className={`${styles["yellow"]}`}
            onClick={minimiseHandler}
            onTouchStart={minimiseHandler}
          ></button>
        )}
        <button
          className={`${styles["green"]}`}
          onClick={expandHandler}
          onTouchStart={expandHandler}
        ></button>
      </div>
      <div className={styles["title-bar-text"]}>{props.title}</div>
    </div>
  );
};

export default TitleBar;
