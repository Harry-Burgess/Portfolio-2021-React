import "./App.css";
import React, { useState } from "react";
import FileManager from "./Components/FileManager/FileManager";
import Icons from "./Components/Icons/Icons";
import FileWindow from "./Components/FileWindow/FileWindow";

function App() {
  const [openedByFolder, setOpenedByFolder] = useState(false);
  const [currentActiveWindow, setCurrentActiveWindow] = useState("fileManager");
  const [fileWindows, setFileWindows] = useState([
    {
      windowID: "fileWindow98",
      about:
        "Welcome message, probably shouldn't be too long but give a good idea of what this site is about and why I did it like this. Probably also mention the mobile version and cross browser disregard.",
      name: "Welcome to my portfolio",
    },
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
  const openFileHandler = (fileInfo) => {
    const idNumber = fileInfo.id;
    const idExists = () => {
      return fileWindows.some((file) => {
        return file.windowID === `fileWindow${idNumber}`;
      });
    };
    if (!idExists()) {
      const rndInt = Math.floor(Math.random() * 5) + 1;
      setFileWindows(() => {
        return [
          ...fileWindows,
          { windowID: `fileWindow${idNumber}`, positon: rndInt, ...fileInfo },
        ];
      });
    }
    setCurrentActiveWindow(`fileWindow${idNumber}`);
  };
  const removeFromArrayHandler = (removeId) => {
    const fileRemovedArray = fileWindows.filter(
      (file) => file.windowID !== removeId
    );
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
      <Icons folderIconClicked={folderIconClickedHandler} />
      {fileWindows.map((window) => {
        return (
          <FileWindow
            activeWindow={activeWindowHandler}
            active={currentActiveWindow === window.windowID ? true : false}
            id={window.windowID}
            key={window.windowID}
            image={window.fileName}
            text={window.about}
            removeFromArray={removeFromArrayHandler}
            positionClass={`position${window.positon}`}
          />
        );
      })}
    </div>
  );
}

export default App;
