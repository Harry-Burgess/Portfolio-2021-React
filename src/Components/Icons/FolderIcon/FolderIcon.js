import React, { useRef } from "react";
import Draggable from "react-draggable";
import styles from "./FolderIcon.module.scss";

const FolderIcon = (props) => {
  const openFolderHandler = () => {
    props.folderIconClicked();
  };
  const nodeRef = useRef(null);
  return (
    <Draggable handle=".folder-handle" bounds="parent" nodeRef={nodeRef}>
      <div
        className={`${styles["folder-icon"]} folder-handle`}
        onDoubleClick={openFolderHandler}
        onTouchStart={openFolderHandler}
        ref={nodeRef}
      >
        <img
          src="/images/folder-icon.svg"
          alt="Folder icon"
          className="folder-image"
          draggable="false"
        />
        <h3>Files</h3>
      </div>
    </Draggable>
  );
};

export default FolderIcon;
