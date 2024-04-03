import React from "react";
import Headerlink from "../atoms/Headerlink";
import Logo from "../atoms/Logo";
import styles from "./Navbar.module.css";

export default function Navbar({ logolink }) {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Logo}>
        <Logo srclink={logolink}></Logo>
      </div>

      <div className={styles.linkwrapper}>
        <Headerlink linkto="/Games" text="Spiele"></Headerlink>
        <Headerlink linkto="/" text="Tabelle"></Headerlink>
      </div>
    </div>
  );
}
