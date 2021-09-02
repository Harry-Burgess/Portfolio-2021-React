import React from "react";
import styles from "./TitleBar.module.scss";

const TitleBar = (props) => {
  const closeHandler = () => {
    props.changeWindow("closed");
  };
  const minimiseHandler = () => {
    props.changeWindow("minimised");
  };
  const expandHandler = () => {
    props.changeWindow("expanded");
  };
  return (
    <div className={`${styles["title-bar"]} window-handle`}>
      <div className={styles["title-bar-controls"]}>
        <button className={`${styles["red"]}`} onClick={closeHandler}></button>

        {props.activeWindowControl === "expanded" ? (
          <button className={`${styles["disabled"]}`}></button>
        ) : (
          <button
            className={`${styles["yellow"]}`}
            onClick={minimiseHandler}
          ></button>
        )}
        <button
          className={`${styles["green"]}`}
          onClick={expandHandler}
        ></button>
      </div>
      <div className={styles["title-bar-text"]}>{props.title}</div>
    </div>
  );
};

export default TitleBar;
