import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/showHide.module.scss";
import BlueButton from "@/components/BlueButton";
import RedButton from "@/components/RedButton";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { WordsContext } from "../WordsContext";

import { NameContext } from "../../src/NameContext";
import { style } from "@mui/system";

function showHide() {
  const [words, setWords] = useContext(WordsContext);
  const [persons, setPersons] = useContext(NameContext);
  const [clickCounter, setCliclCoumter] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [indexOfPlayerm, setIndexOfPlayerm] = useState(0);
  const [clickedTimes, setClickedTimes] = useState(0);

  const cardToggle = () => {
    setIsShown(!isShown);
    setClickedTimes((prev) => prev + 1);
  };

  const choosePlayer = () => {
    let times = clickedTimes / 2; // 2 ზე იყოფა თუ არა რადგან ყოველი ეორე გვინდა
    let player = 0;
    if (times % 1 == 0) {
      setIndexOfPlayerm(times);
    }
  };
  useEffect(() => {
    choosePlayer();
  }, [clickedTimes]);
  console.log(persons);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.backIconCont}>
          <Link href="/names">
            <BackButton className={styles.backButton} />
          </Link>
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.name}>{persons[indexOfPlayerm].name}</p>

          <div className={styles.card}>
            <div className={styles.flipCard}>
              <div className={isShown && `${styles.flipCardInner}`}>
                <div className={styles.flipCardFront}>
                  <Image
                    src="/images/background.png"
                    width={329}
                    height={200}
                    className={styles.cardImage}
                    alt="background of the card"
                  />
                </div>
                <div className={styles.flipCardBack}>
                  <p>სიტყვა</p>
                </div>
              </div>
            </div>
          </div>
          {isShown ? (
            <RedButton text="დახურე" onClick={cardToggle} />
          ) : (
            <BlueButton text="მაჩვენე" onClick={cardToggle} />
          )}
        </div>
      </div>
    </>
  );
}

export default showHide;
