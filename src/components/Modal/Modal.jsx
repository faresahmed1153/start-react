import React from "react";
import styles from "./modal.module.css";
import Star from "../Star/Star";
export default function Modal(props) {
  return (
    <div
      class="modal fade"
      id={props.id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="exampleModalLabel"></h5>

            <i
              className={`fa-solid fa-xmark  ${styles.close}`}
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              aria-hidden="true"
            ></i>
          </div>
          <div class="modal-body d-flex justify-content-center align-items-center flex-column">
            <h2 className={styles.head}>{props.header}</h2>
            <Star Dark={true} />
            <img className="rounded-3 w-50" src={props.pic} />
            <p className="w-50 mt-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
          </div>
          <div class="modal-footer border-0">
            <button
              type="button"
              className={`btn ${styles.close2} m-auto mb-4`}
              data-bs-dismiss="modal"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
