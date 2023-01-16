import React from "react";
import styles from "../styles/componentStyles/BlueButtonStyles.module.scss";

function BlueButton({ text, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default BlueButton;
