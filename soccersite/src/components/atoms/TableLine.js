import React from "react";
import Logo from "./Logo";
import styles from "./TableLine.module.css";

export default function TableLine({
  srclink,
  teamname,
  games,
  pts,
  wins,
  losses,
  goals,
  owngoals,
  goaldiff,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.team}>
        <img src={srclink} className={styles.img}></img>
        <div>{teamname}</div>
      </div>
      <div className={styles.stats}>
        <div className={styles.num}>{pts}</div>
        <div className={styles.num}>{games}</div>
        <div className={styles.num}>{wins}</div>
        <div className={styles.num}>{losses}</div>
        <div className={styles.num}>{goals}</div>
        <div className={styles.num}>{owngoals}</div>
        <div className={styles.num}>{goaldiff}</div>
      </div>
    </div>
  );
}
