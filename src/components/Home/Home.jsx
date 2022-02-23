import React from "react";
import { ReactComponent as Logo } from "./avataaars.svg";
import styles from "./home.module.css";
import Star from './../Star/Star';


export default function Home() {
  return (
    <>
      <div
        className={`${styles.home} w-100 vh-100 d-flex align-items-center justify-content-center flex-column text-white`}
      >
        <Logo className={`${styles["img-width"]} mt-5 pt-5`} />
        <h1 class="text-uppercase mb-0 mt-3">Start React</h1>

        <Star/>

        <p class="masthead-subheading font-weight-light mb-0">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
