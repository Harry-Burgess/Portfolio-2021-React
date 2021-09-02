import React from "react";
import styles from "./FinderItem.module.scss";

const FinderItem = (props) => {
  const finderItemClickHandler = (e) => {
    props.setActive(e.target.innerText, props.info, props.paneNumber);
  };
  const openFileHandler = () => {
    if (props.info) {
      props.openFile(props.info);
    }
  };
  return (
    <li
      className={`
        ${styles["finder-item"]}
        ${styles[props.text === props.activeItem ? "active" : null]}
        ${
          styles[
            props.activePane === props.paneNumber && props.activeWindow
              ? "last-active"
              : null
          ]
        }
      `}
      onClick={finderItemClickHandler}
      onDoubleClick={openFileHandler}
    >
      {props.text}
    </li>
  );
};

export default FinderItem;
