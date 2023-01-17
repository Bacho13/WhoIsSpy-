import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/showHide.module.scss";
import BlueButton from "@/components/BlueButton";
import RedButton from "@/components/RedButton";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { WordsContext } from "../WordsContext";
import { useRouter } from "next/router";
import { NameContext } from "../../src/NameContext";

function ShowHide() {
  const [words, setWords] = useContext(WordsContext);
  const [persons, setPersons] = useContext(NameContext);
  const [clickCounter, setClickCounter] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [indexOfPlayer, setIndexOfPlayer] = useState(0);
  const [clickedTimes, setClickedTimes] = useState(0);
  const [randomNum, setRandomNum] = useState(0);
  const [randomWordIndex, setRandomWordIndex] = useState(0);
  const router = useRouter();

  const getRandomNum = (max) => {
    let rand = Math.floor(Math.random() * max);
    setRandomNum(rand);
  };

  const randomIndexForWord = (max) => {
    let rand = Math.floor(Math.random() * max);
    setRandomWordIndex(rand);
  };

  useEffect(() => {
    getRandomNum(persons.length);
    randomIndexForWord(words.length);
  }, []);

  const cardToggle = () => {
    if (clickedTimes == persons.length * 2 - 1) {
      router.push("/askQuestion");
    } else {
      setClickedTimes((prev) => prev + 1);
      setIsShown(!isShown);
    }
  };

  const choosePlayer = () => {
    let times = clickedTimes / 2; // 2 ზე იყოფა თუ არა რადგან ყოველი ეორე გვინდა
    if (times % 1 == 0) {
      setIndexOfPlayer(times);
    }
  };

  useEffect(() => {
    choosePlayer();
    ShowWordOrSpy();
  }, [isShown, clickedTimes]);

  const ShowWordOrSpy = () => {
    if (indexOfPlayer == randomNum) {
      return <p>ჯაშუში</p>;
    } else {
      return <p>{words[randomWordIndex].word}</p>;
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.backIconCont}>
          <Link href="/names">
            <BackButton className={styles.backButton} />
          </Link>
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.name}>{persons[indexOfPlayer].name}</p>

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
                <div className={styles.flipCardBack}>{ShowWordOrSpy()}</div>
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
