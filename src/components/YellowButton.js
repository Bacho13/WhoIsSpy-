import Link from "next/link";
import React from "react";
import styles from "../styles/componentStyles/YellowButtonStyles.module.scss";

function YellowButton({ text, href }) {
  return (
    <div className={styles.button}>
      <p>{text}</p>
    </div>
  );
}

export default YellowButton;
