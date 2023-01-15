import YellowButton from "@/components/YellowButton";
import React from "react";
import styles from "../styles/names.module.scss";
function names() {
  return (
    <>
      <div className={styles.names}>
        <YellowButton text="დამატება" />
      </div>
    </>
  );
}

export default names;
