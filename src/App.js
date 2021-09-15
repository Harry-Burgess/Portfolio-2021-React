import "./App.css";
import React, { useState } from "react";
import FileManager from "./Components/FileManager/FileManager";
import Icons from "./Components/Icons/Icons";
import FileWindow from "./Components/FileWindow/FileWindow";
import TechStack from "./Components/TechStack/TechStack";
import Contact from "./Components/Contact/Contact";

function App() {
  const [openedByFolder, setOpenedByFolder] = useState(false);
  const [currentActiveWindow, setCurrentActiveWindow] = useState("fileManager");
  const [fileWindows, setFileWindows] = useState([
    {
      windowID: "fileWindow98",
      about: [
        "Hi, I'm Harry, a Web Developer from the Peak District. Welcome to my portfolio! This website is built with React.js, I haven't done much commercial work with React so I wanted to make a cool portfolio with it.",
        "Have a look around, if you like what you see you can call me on 07710454840 or email me at harryburgessjd@gmail.com",
      ],
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
      <Contact />
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
            link={window.externalLink}
            madeWith={window.madeWith}
            removeFromArray={removeFromArrayHandler}
            positionClass={`position${window.positon}`}
          />
        );
      })}
      <TechStack />
    </div>
  );
}

export default App;
