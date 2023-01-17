import React from "react";
import styles from "../styles/AskQuestions.module.scss";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Link from "next/link";

function AskQuestion() {
  //   const router = useRouter();
  return (
    <>
      <div className={styles.Main}>
        <p>დაუსვით კითხვები ერთმანეთს</p>
        <div className={styles.iconCont}>
          <Link href="/">
            <AutorenewIcon className={styles.icon} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default askQuestion;
