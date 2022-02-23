import React from "react";
import styles from "./item.module.css";
export default function Item(props) {
  return (
    <div className="position-relative w-75 m-auto  ">
      <img className="w-100 rounded-3" src={props.pic} />
      <div
        className={`w-100 position-absolute rounded-3 d-flex justify-content-center align-items-center ${styles.layer} `}
        data-bs-toggle="modal"
        data-bs-target={`#${props.id}`}
      >
        <i className={`fa-solid fa-plus ${styles.plus}`}></i>
      </div>
    </div>
  );
}
