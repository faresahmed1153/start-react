import React from "react";
import styles from "./about.module.css";
import Star from "./../Star/Star";
export default function About() {
  return (
    <>
      <section
        className={`${styles.about} py-5  d-flex justify-content-center align-items-center flex-column  vh-100`}
      >
        <h2 className={`text-center   ${styles.head}`}>ABOUT</h2>
        <Star />
        <div className=" container  text-start mt-2">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 ">
              <div className={`lead pb-3 fw-bold ${styles.details}`}>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
            </div>
            <div className="col-md-4 ">
              <div className={`lead mb-4 pb-3 fw-bold ${styles.details}`}>
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
