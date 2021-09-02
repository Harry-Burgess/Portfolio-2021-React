import React, { useState } from "react";
import styles from "./FinderPane.module.scss";
import FinderItem from "./FinderItem/FinderItem";

// Will need to create a componet for all 3 possible panes
const FinderPane = (props) => {
  const [activeFinderItem, setActiveFinderItem] = useState(null);
  const setActiveHandler = (activeItem, fileInfo, paneNumber) => {
    setActiveFinderItem(activeItem);
    props.activeItem(activeItem, fileInfo, paneNumber);
  };
  const openFileHandler = (fileInfo) => {
    props.openFile(fileInfo);
  };
  return (
    <ul className={`${styles["pane-list"]} ${styles["finder-pane"]}`}>
      {props.paneContent.map((paneItem) => {
        return (
          <FinderItem
            key={`${paneItem.name}_${paneItem.type}`}
            text={paneItem.name}
            type={paneItem.type}
            info={paneItem.fileInfo}
            paneNumber={props.paneNumber}
            setActive={setActiveHandler}
            activeItem={activeFinderItem}
            activePane={props.activePane}
            activeWindow={props.activeWindow}
            openFile={openFileHandler}
          />
        );
      })}
    </ul>
  );
};

export default FinderPane;
