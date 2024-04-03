import React, { useEffect, useState } from "react";
import TableLine from "../atoms/TableLine";
import styles from "./Table.module.css";

export default function Table() {
  const [Teams, setTeams] = useState([]);
  const [FilteredTeams, setFilteredTeams] = useState([]);
  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl2/2021").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setTeams(data);
        setFilteredTeams(data);
      })
    );
  }, []);

  const filterTeams = (filter) => {
    let filtered = Teams.filter((team) => team.shortName.includes(filter));
    setFilteredTeams(filtered);
  };

  return (
    <div className={styles.table}>
      <input
        className={styles.filter}
        placeholder="search"
        type="text"
        onChange={(el) => {
          console.log(el.target.value);
          filterTeams(el.target.value);
        }}
      ></input>
      <div className={styles.wrapper}>
        <div>Teams</div>
        <div className={styles.space}>jamesbondistcool</div>
        <div>Pkt</div>
        <div>Spiele</div>
        <div>Siege</div>
        <div>Niderl.</div>
        <div>Tore</div>
        <div>Gegent.</div>
        <div>Tordiff</div>
      </div>
      {FilteredTeams.map((element) => {
        return (
          <TableLine
            srclink={element.teamIconUrl}
            teamname={element.shortName}
            pts={element.points}
            games={element.matches}
            wins={element.won}
            losses={element.lost}
            goals={element.goals}
            owngoals={element.opponentGoals}
            goaldiff={element.goalDiff}
          ></TableLine>
        );
      })}
    </div>
  );
}

/* 

*/
