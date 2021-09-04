import React, { useRef } from "react";
import Draggable from "react-draggable";
import styles from "./Icon.module.scss";

const Icon = (props) => {
  const nodeRef = useRef(null);
  const iconClickHandler = () => {
    window.open(props.url, "_blank");
  };
  return (
    <Draggable
      handle={`.${props.text.toLowerCase()}`}
      bounds="parent"
      nodeRef={nodeRef}
    >
      <div
        className={`${styles["icon"]} ${props.text.toLowerCase()} ${
          styles[props.text.toLowerCase()]
        }`}
        onDoubleClick={iconClickHandler}
        ref={nodeRef}
      >
        <img
          src={`/images/${props.text.toLowerCase()}-icon.svg`}
          alt={`${props.text} icon`}
          draggable="false"
        />
        <h3>{props.text}</h3>
      </div>
    </Draggable>
  );
};

export default Icon;
