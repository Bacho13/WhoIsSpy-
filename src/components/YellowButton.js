import React from "react";
import styles from "../styles/componentStyles/YellowButtonStyles.module.scss";

function YellowButton({ text, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default YellowButton;
