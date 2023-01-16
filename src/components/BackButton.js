import React from "react";
import styles from "../styles/componentStyles/BackButton.module.scss";
import ReplyIcon from "@mui/icons-material/Reply";
import Link from "next/link";

function BackButton() {
  return (
    <>
      <div className={styles.button}>
        <ReplyIcon className={styles.buttonIcon} />
      </div>
    </>
  );
}

export default BackButton;
