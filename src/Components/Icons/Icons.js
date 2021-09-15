import React from "react";
import FolderIcon from "./FolderIcon/FolderIcon";
import Icon from "./Icon/Icon";
import styles from "./Icons.module.scss";

const Icons = (props) => {
  const folderIconClickedHandler = () => {
    props.folderIconClicked();
  };
  return (
    <div className={styles["icons"]}>
      <FolderIcon folderIconClicked={folderIconClickedHandler} />
      <Icon text="LinkedIn" url="https://www.linkedin.com/in/harry-burgess/" />
      <Icon text="GitHub" url="https://github.com/Harry-Burgess" />
      <Icon text="Download CV" url="./files/About/HarryBurgess_CV.pdf" />
    </div>
  );
};

export default Icons;
