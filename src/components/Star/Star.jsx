import React from "react";
import styles from "./star.module.css";
export default function Star(props) {
  return (
    <div className="d-flex align-items-center justify-content-center  text-white mb-4 mt-4">
      {props.Dark ? (
        <div className={`${styles.line} ${styles.dark}`}> </div>
      ) : (
        <div className={styles.line}> </div>
      )}

      {props.Dark ? (
        <i className={`fa-solid fa-star ${styles.star} ${styles.dark2}`}> </i>
      ) : (
        <i className={`fa-solid fa-star ${styles.star}`}> </i>
      )}

      {props.Dark ? (
        <div className={`${styles.line2} ${styles.dark}`}> </div>
      ) : (
        <div className={styles.line2}> </div>
      )}
    </div>
  );
}
