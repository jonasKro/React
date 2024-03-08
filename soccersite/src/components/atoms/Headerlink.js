import React from "react";
import { Link } from "react-router-dom";
import styles from "./Headerlink.module.css";

export default function Headerlink({ text, linkto }) {
  return (
    <div>
      <Link to={linkto} className={styles.navlink}>
        {text}
      </Link>
    </div>
  );
}
