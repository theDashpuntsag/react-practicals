import React from "react";
import styles from "./Card.module.css";

// Children props is special prop, which every components receives by default.
// children prop will always holds the content between that specific components opening tag and closing tag
function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
