import React from "react";
import styles from "./contact.module.css";
import Star from "./../Star/Star";
export default function Contact() {
  return (
    <>
      <section className="contact container pt-5 mt-1 d-flex justify-content-center align-items-center flex-column">
        <h2 className={`${styles.header} mt-5`}>CONTACT ME</h2>
        <Star Dark={true} />
        <input
          class="form-control border-0 border border-bottom shadow-none w-50 p-4 mb-2"
          id="name"
          type="text"
          placeholder="Name"
          required="required"
        ></input>
        <input
          class="form-control border-0 border border-bottom shadow-none w-50 p-4 mb-2"
          id="email"
          type="email"
          placeholder="Email Address"
          required="required"
        ></input>
        <input
          class="form-control border-0 border border-bottom shadow-none w-50 p-4 mb-2"
          id="phone"
          type="tel"
          placeholder="Phone Number"
          required="required"
        ></input>
        <textarea
          class={`form-control border-0 border border-bottom shadow-none w-50 p-4 mb-2 ${styles.text}`}
          id="msg"
          rows="5"
          placeholder="Message"
          required="required"
        ></textarea>
        <div className="w-50">
          <button
            className={`btn btn-primary btn-xl rounded  shadow-none mt-2  ${styles.bttn}`}
          >
            Send
          </button>
        </div>
      </section>
    </>
  );
}
