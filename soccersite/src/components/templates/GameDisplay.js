import React, { useEffect, useState } from "react";
import IndividualGame from "../molecules/IndividualGame";
import styles from "./GameDisplay.module.css";

export default function GameDisplay() {
  const [Games, setGames] = useState([]);
  useEffect(() => {
    fetch("https://api.openligadb.de/getmatchdata/bl2/2021").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setGames(data);
      })
    );
  }, []);

  const formatDate = (dateString) => {
    return dateString.substring(0, 10);
  };

  return (
    <div className={styles.gamedisplay}>
      {Games.map((element) => {
        return (
          <IndividualGame
            date={formatDate(element.matchDateTime)}
            team1={element.team1.shortName}
            team2={element.team2.shortName}
            ptst1={element.matchResults[0].pointsTeam1}
            ptst2={element.matchResults[0].pointsTeam2}
            img1={element.team1.teamIconUrl}
            img2={element.team2.teamIconUrl}
          ></IndividualGame>
        );
      })}
    </div>
  );
}
