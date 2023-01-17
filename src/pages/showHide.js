import Image from "next/image";
import React, { UseContext, UseEffect, UseState } from "react";
import styles from "../styles/showHide.module.scss";
import BlueButton from "@/components/BlueButton";
import RedButton from "@/components/RedButton";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { WordsContext } from "../WordsContext";
import { useRouter } from "next/router";
import { NameContext } from "../../src/NameContext";

function showHide() {
  const [words, setWords] = UseContext(WordsContext);
  const [persons, setPersons] = UseContext(NameContext);
  const [clickCounter, setClickCounter] = UseState(0);
  const [isShown, setIsShown] = UseState(false);
  const [indexOfPlayer, setIndexOfPlayer] = UseState(0);
  const [clickedTimes, setClickedTimes] = UseState(0);
  const [randomNum, setRandomNum] = UseState(0);
  const [randomWordIndex, setRandomWordIndex] = UseState(0);
  const router = UseRouter();

  const getRandomNum = (max) => {
    let rand = Math.floor(Math.random() * max);
    setRandomNum(rand);
  };

  const randomIndexForWord = (max) => {
    let rand = Math.floor(Math.random() * max);
    setRandomWordIndex(rand);
  };

  UseEffect(() => {
    getRandomNum(persons.length);
    randomIndexForWord(words.length);
  }, []);

  const cardToggle = () => {
    if (clickedTimes == persons.length * 2 - 1) {
      router.push("/");
    } else {
      setClickedTimes((prev) => prev + 1);
      setIsShown(!isShown);
    }
    console.log(persons.length);
    console.log(clickedTimes);
  };

  const choosePlayer = () => {
    let times = clickedTimes / 2; // 2 ზე იყოფა თუ არა რადგან ყოველი ეორე გვინდა
    if (times % 1 == 0) {
      setIndexOfPlayer(times);
    }
  };

  UseEffect(() => {
    choosePlayer();
    ShowWordOrSpy();
  }, [isShown]);

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
