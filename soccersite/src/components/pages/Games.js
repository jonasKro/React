import React from "react";
import Navbar from "../molecules/Navbar";
import GameDisplay from "../templates/GameDisplay";
import styles from "./Games.module.css";

export default function Games() {
  return (
    <div className={styles.wrapper}>
      <Navbar
        className={styles.navbar}
        logolink="https://upload.wikimedia.org/wikipedia/de/thumb/5/51/Fu%C3%9Fball_Bundesliga_%28%C3%96sterreich%29_Logo.svg/1200px-Fu%C3%9Fball_Bundesliga_%28%C3%96sterreich%29_Logo.svg.png"
      ></Navbar>
      <div className={styles.body}>
        <GameDisplay></GameDisplay>
      </div>
    </div>
  );
}
