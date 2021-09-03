import React from "react";
import styles from "./FileWindow.module.scss";
import Window from "../Window/Window";

const FileWindow = (props) => {
  const activeWindowHandler = (id) => {
    props.activeWindow(id);
  };
  const removeFromArrayHandler = (removeId) => {
    props.removeFromArray(removeId);
  };
  return (
    <Window
      className={styles["file-window"]}
      activeWindow={activeWindowHandler}
      currentActiveWindowCount={props.currentActiveWindowCount}
      isActive={props.active}
      id={props.id}
      type={props.image ? "image" : "text"}
      removeFromArray={removeFromArrayHandler}
      positionClass={props.positionClass}
    >
      {props.image ? (
        <img src={`/files/${props.image}`} alt="File content" />
      ) : (
        <p>{props.text}</p>
      )}
    </Window>
  );
};

export default FileWindow;
