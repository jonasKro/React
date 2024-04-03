import React from "react";
import styles from "./Logo.module.css";

export default function Logo({ srclink }) {
  return (
    <div>
      <img src={srclink} className={styles.logoImg}></img>
    </div>
  );
}
