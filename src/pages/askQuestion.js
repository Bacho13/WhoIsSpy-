import React from "react";
import styles from "../styles/AskQuestions.module.scss";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
function AskQuestion() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.homeiconCont}>
          <Link href="/" className={styles.link}>
            <HomeIcon
              className={styles.homeIcon}
              style={{ width: "70px", height: "70px" }}
            />
          </Link>
        </div>

        <p>დაუსვით კითხვები ერთმანეთს</p>
        <div className={styles.iconCont}>
          <Link href="/showHide" className={styles.iconLink}>
            <AutorenewIcon
              className={styles.customIcon}
              style={{ width: "70px", height: "70px" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default AskQuestion;
