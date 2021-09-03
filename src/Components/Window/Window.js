import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./Window.module.scss";
import Draggable from "react-draggable";
import TitleBar from "./TitleBar/TitleBar";

const Window = (props) => {
  const [windowControl, setWindowControl] = useState();
  const removeOpenedByFolder = useCallback(() => {
    props.removeOpenedByFolder();
  }, [props]);
  const changeWindowHandler = (change) => {
    if (change === windowControl) {
      setWindowControl();
    } else {
      setWindowControl(change);
    }
    if (change !== "expanded" && props.id !== "fileManager") {
      props.removeFromArray(props.id);
    }
  };
  useEffect(() => {
    if (props.openedByFolder) {
      setWindowControl();
      removeOpenedByFolder();
    }
  }, [props.openedByFolder, removeOpenedByFolder]);
  const nodeRef = useRef(null);
  return (
    <Draggable
      handle=".window-handle"
      bounds="parent"
      onMouseDown={() => {
        props.activeWindow(props.id);
      }}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={`
          ${styles["window"]}
          ${props.className}
          ${styles[windowControl]}
          ${props.isActive ? styles["active-window"] : null}
          ${styles[props.type]}
          ${styles[props.positionClass]}
        `}
      >
        <TitleBar
          changeWindow={changeWindowHandler}
          activeWindowControl={windowControl}
          title={
            props.id === "fileManager"
              ? "Harry Burgess — Portfolio"
              : "File Window"
          }
        />
        <div className={styles["window-body"]}>{props.children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
