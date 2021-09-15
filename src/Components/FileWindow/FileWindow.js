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
        <img src={`./files/${props.image}`} alt="File content" />
      ) : (
        <>
          {props.text.map((para) => {
            return <p key={para.slice(0, 10)}>{para}</p>;
          })}
          {props.madeWith ? (
            <p>My involvement / Tech used: {props.madeWith}</p>
          ) : null}
          {props.link ? (
            <p>
              <a href={props.link} target="_blank" rel="noreferrer">
                Link to website
              </a>
            </p>
          ) : null}
        </>
      )}
    </Window>
  );
};

export default FileWindow;
