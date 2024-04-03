import React from "react";
import styles from "./IndividualGame.module.css";

export default function IndividualGame({
  date,
  team1,
  team2,
  ptst1,
  ptst2,
  img1,
  img2,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.team}>
        <img className={styles.teamlogo} src={img1}></img>
        <div>{team1}</div>
      </div>

      <div className={styles.stats}>
        <div>{date}</div>
        <div className={styles.score}>
          {ptst1} : {ptst2}
        </div>
      </div>

      <div className={styles.team}>
        <div>{team2}</div>
        <img className={styles.teamlogo} src={img2}></img>
      </div>
    </div>
  );
}
