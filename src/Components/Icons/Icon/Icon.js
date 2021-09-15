import React, { useRef } from "react";
import Draggable from "react-draggable";
import styles from "./Icon.module.scss";

const Icon = (props) => {
  const nodeRef = useRef(null);
  const iconClickHandler = () => {
    window.open(props.url, "_blank");
  };
  const strippedText = props.text.toLowerCase().replace(/\s/g, "");
  return (
    <Draggable handle={`.${strippedText}`} bounds="parent" nodeRef={nodeRef}>
      <div
        className={`${styles["icon"]} ${strippedText} ${styles[strippedText]}`}
        onDoubleClick={iconClickHandler}
        onTouchStart={iconClickHandler}
        ref={nodeRef}
      >
        <img
          src={`/images/${strippedText}-icon.svg`}
          alt={`${props.text} icon`}
          draggable="false"
        />
        <h3>{props.text}</h3>
      </div>
    </Draggable>
  );
};

export default Icon;
