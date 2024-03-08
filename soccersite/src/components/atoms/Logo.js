import React from "react";
import styles from "./Logo.module.css";

export default function Logo({ srclink }) {
  return (
    <div>
      <img src={srclink} alt="description" className={styles.logoImg}></img>
    </div>
  );
}
