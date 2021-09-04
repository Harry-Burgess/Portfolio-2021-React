import React from "react";
import FolderIcon from "./FolderIcon/FolderIcon";
import Icon from "./Icon/Icon";
import styles from "./Icons.module.scss";

const Icons = (props) => {
  const folderIconClickedHandler = () => {
    props.folderIconClicked();
  };
  return (
    <>
      <FolderIcon folderIconClicked={folderIconClickedHandler} />
      <Icon
        text="LinkedIn"
        url="https://www.linkedin.com/in/harry-burgess/"
        image=""
      />
      <Icon text="GitHub" url="https://github.com/Harry-Burgess" image="" />
    </>
  );
};

export default Icons;
