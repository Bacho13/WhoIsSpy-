import React from "react";
import styles from "../styles/componentStyles/RedButton.module.scss";

function RedwButton({ text, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default RedwButton;
