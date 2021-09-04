import React from "react";
import styles from "./TechStack.module.scss";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  return (
    <Marquee
      gradient={false}
      speed={60}
      style={{ position: "fixed", bottom: 0 }}
    >
      <ul className={styles["tech-stack"]}>
        <li className={styles["tech-stack-item"]}>HTML</li>
        <li className={styles["tech-stack-item"]}>CSS</li>
        <li className={styles["tech-stack-item"]}>Javascript (ES6)</li>
        <li className={styles["tech-stack-item"]}>React.js</li>
        <li className={styles["tech-stack-item"]}>Python</li>
        <li className={styles["tech-stack-item"]}>Umbraco</li>
        <li className={styles["tech-stack-item"]}>.NET (Working knowledge)</li>
        <li className={styles["tech-stack-item"]}>Drupal</li>
        <li className={styles["tech-stack-item"]}>Selenium</li>
        <li className={styles["tech-stack-item"]}>Sass</li>
        <li className={styles["tech-stack-item"]}>Git</li>
        <li className={styles["tech-stack-item"]}>...and more!</li>
      </ul>
    </Marquee>
  );
};

export default TechStack;
