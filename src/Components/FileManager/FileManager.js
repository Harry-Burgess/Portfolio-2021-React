import React, { useState } from "react";

import styles from "./FileManager.module.scss";

import Window from "../Window/Window";
import FilePreview from "./FilePreview/FilePreview";
import FinderPane from "./FinderPane/FinderPane";

import FileStructure from "../FileStructure.json";

const FileManager = (props) => {
  const paneOneContent = FileStructure.originalFolders;
  const [paneTwoContent, setPaneTwoContent] = useState();
  const [paneThreeContent, setPaneThreeContent] = useState();
  const [filePreviewInfo, setFilePreviewInfo] = useState(undefined);
  const [activePane, setActivePane] = useState();

  const activeItemOneHandler = (activeItem, fileInfo, paneNumber) => {
    const itemSelected = activeItem.replace(/\s/g, "");
    setPaneTwoContent(FileStructure.subFolders[itemSelected]);
    setPaneThreeContent();
    setFilePreviewInfo(fileInfo);
    setActivePane(paneNumber);
  };
  const activeItemTwoHandler = (activeItem, fileInfo, paneNumber) => {
    const itemSelected = activeItem.replace(/\s/g, "");
    setPaneThreeContent(FileStructure.subSubFolders[itemSelected]);
    setFilePreviewInfo(fileInfo);
    setActivePane(paneNumber);
    setTimeout(() => {
      document.getElementById("panes").scrollLeft += 250;
    }, 1);
  };
  const activeItemThreeHandler = (activeItem, fileInfo, paneNumber) => {
    setFilePreviewInfo(fileInfo);
    setActivePane(paneNumber);
    setTimeout(() => {
      document.getElementById("panes").scrollLeft += 250;
    }, 1);
  };
  const removeOpenedByFolderHandler = () => {
    props.removeOpenedByFolder();
  };
  const activeWindowHandler = (id) => {
    props.activeWindow(id);
  };
  const openFileHandler = (fileInfo) => {
    props.openFile(fileInfo);
  };

  return (
    <Window
      className={styles["finder-window"]}
      openedByFolder={props.openedByFolder}
      removeOpenedByFolder={removeOpenedByFolderHandler}
      activeWindow={activeWindowHandler}
      isActive={props.active}
      id={props.id}
    >
      <div className={styles["panes"]} id="panes">
        <FinderPane
          paneContent={paneOneContent}
          activeItem={activeItemOneHandler}
          paneNumber="1"
          activePane={activePane}
          activeWindow={props.active}
          openFile={openFileHandler}
        />
        {paneTwoContent !== undefined && paneTwoContent.length > 0 ? (
          <FinderPane
            paneContent={paneTwoContent}
            activeItem={activeItemTwoHandler}
            paneNumber="2"
            activePane={activePane}
            activeWindow={props.active}
            openFile={openFileHandler}
          />
        ) : null}
        {paneThreeContent !== undefined && paneThreeContent.length > 0 ? (
          <FinderPane
            paneContent={paneThreeContent}
            activeItem={activeItemThreeHandler}
            paneNumber="3"
            activePane={activePane}
            activeWindow={props.active}
            openFile={openFileHandler}
          />
        ) : null}
        {filePreviewInfo !== undefined ? (
          <FilePreview info={filePreviewInfo} openFile={openFileHandler} />
        ) : null}
      </div>
    </Window>
  );
};

export default FileManager;
