import YellowButton from "@/components/YellowButton";
import React, { useContext, useState } from "react";
import styles from "../styles/names.module.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NameContext } from "../../src/NameContext";
import BackButton from "@/components/BackButton";
import BlueButton from "@/components/BlueButton";
import Link from "next/link";
function Names() {
  const [persons, setPersons] = useContext(NameContext);
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const nextId = persons.length + 1;

  const updatePersons = () => {
    if (name !== "") {
      setPersons((prevNames) => [...prevNames, { name: name, id: nextId }]);
      console.log(persons);
      setName("");
    } else {
      console.log("Cawere saxeli");
    }
  };

  const deletName = (index) => {
    const filtered = persons.filter((person) => {
      return person.id !== index;
    });
    setPersons(filtered);
  };

  const showContent = () => {
    if (persons.length > 0) {
      return listNames();
    } else {
      return showError();
    }
  };

  const showStartButton = () => {
    if (persons.length >= 3) {
      return (
        <Link href="/showHide">
          <BlueButton text="  თამაშის დაწყება" />
        </Link>
      );
    }
  };

  const listNames = () => {
    return persons.map((item) => {
      return (
        <div key={item.id} className={`${styles.input} ${styles.showName}`}>
          <p>{item.name}</p>
          <DeleteForeverIcon
            className={styles.deletIcon}
            onClick={() => {
              deletName(item.id);
            }}
          />
        </div>
      );
    });
  };

  const showError = () => {
    return (
      <p className={styles.error}>
        უნდა იყოს მინიმუმ 3 და მაქსიმუმ 12 მოთამაშე
      </p>
    );
  };

  return (
    <>
      <div className={styles.names}>
        <div className={styles.backButtonContainer}>
          <Link href="/">
            <BackButton />
          </Link>
        </div>
        <div className={styles.upper}>{showContent()}</div>
        <div className={styles.bottom}>
          <div className={styles.inputContainer}>
            <p>მოთამშეს სახელი</p>
            <input
              type="text"
              className={styles.input}
              value={name}
              onChange={updateName}
            />
          </div>
          {persons.length < 12 && (
            <YellowButton text="დამატება" onClick={updatePersons} />
          )}
          {/* <Link href="/showHide">
            <BlueButton text="  თამაშის დაწყება" />
          </Link> */}
          {showStartButton()}
        </div>
      </div>
    </>
  );
}

export default Names;
