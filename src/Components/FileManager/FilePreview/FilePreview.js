import React from "react";
import styles from "./FilePreview.module.scss";

const FilePreview = (props) => {
  const today = new Date();
  const date =
    `${today.getDate()}`.padStart(2, "0") +
    "/" +
    `${today.getMonth() + 1}`.padStart(2, "0") +
    "/" +
    today.getFullYear();
  const time =
    `${today.getHours()}`.padStart(2, "0") +
    ":" +
    `${today.getMinutes()}`.padStart(2, "0");
  const dateTime = date + ", " + time;
  const openFileHandler = () => {
    props.openFile(props.info);
  };
  return (
    <div className={`${styles["pane-preview"]} ${styles["finder-pane"]}`}>
      <div className={styles["preview-content"]}>
        <img
          onDoubleClick={openFileHandler}
          onTouchStart={openFileHandler}
          src={`/files/${props.info.previewImage}`}
          alt={`${props.info.fileName} preview`}
        />
        <div className={styles["file-info"]}>
          <p>{props.info.fileName ? props.info.fileName : "Text file"}</p>
          <span>{props.info.size}</span>
        </div>
        <p>
          <b>Information</b>
        </p>
        <div className={styles["file-details"]}>
          <div className={styles["file-detail"]}>
            <div className={styles["detail-key"]}>Created</div>
            <div className={styles["detail-value"]}>{props.info.created}</div>
          </div>
          <div className={styles["file-detail"]}>
            <div className={styles["detail-key"]}>Modified</div>
            <div className={styles["detail-value"]}>{props.info.modified}</div>
          </div>
          <div className={styles["file-detail"]}>
            <div className={styles["detail-key"]}>Last opened</div>
            <div className={styles["detail-value"]}>{dateTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
