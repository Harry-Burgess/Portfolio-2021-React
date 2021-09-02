import "./App.css";
import React, { useState } from "react";
import FileManager from "./Components/FileManager/FileManager";
import FolderIcon from "./Components/FolderIcon";
import FileWindow from "./Components/FileWindow/FileWindow";

function App() {
  const [openedByFolder, setOpenedByFolder] = useState(false);
  const [currentActiveWindow, setCurrentActiveWindow] = useState("fileManager");
  const [fileWindows, setFileWindows] = useState([
    { windowID: 1, fileName: "file-window-placeholder.png" },
    { windowID: 2, fileName: "file-window-placeholder.png" },
  ]);
  const folderIconClickedHandler = () => {
    setOpenedByFolder(() => {
      return !openedByFolder;
    });
  };
  const removeOpenedByFolderHandler = () => {
    setOpenedByFolder(false);
  };
  const activeWindowHandler = (id) => {
    setCurrentActiveWindow(id);
  };
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const openFileHandler = (fileInfo) => {
    const randomNum = getRandomInt(99999);
    setFileWindows(() => {
      return [...fileWindows, { windowID: randomNum, ...fileInfo }];
    });
    setCurrentActiveWindow(`fileWindow${randomNum}`);
  };
  const removeFromArrayHandler = (removeId) => {
    const fileRemovedArray = fileWindows.filter(
      (file) => `fileWindow${file.windowID}` !== removeId
    );
    console.log(removeId);
    console.log(fileRemovedArray);
    setFileWindows(fileRemovedArray);
  };
  return (
    <div className="App">
      <FileManager
        openedByFolder={openedByFolder}
        removeOpenedByFolder={removeOpenedByFolderHandler}
        activeWindow={activeWindowHandler}
        active={currentActiveWindow === "fileManager" ? true : false}
        id={"fileManager"}
        openFile={openFileHandler}
      />
      <FolderIcon folderIconClicked={folderIconClickedHandler} />
      {fileWindows.map((window) => {
        return (
          <FileWindow
            activeWindow={activeWindowHandler}
            active={
              currentActiveWindow === `fileWindow${window.windowID}`
                ? true
                : false
            }
            id={`fileWindow${window.windowID}`}
            key={window.windowID}
            image={window.fileName}
            text={window.about}
            removeFromArray={removeFromArrayHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
