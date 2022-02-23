import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${style.bg} ${style.navbar} fixed-top py-2`}
        id="nav"
      >
        <div className="container">
          <Link className={`navbar-brand ms-5 ${style.navbar_brand}`} to="/">
            START REACT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item ">
                <Link
                  className={`nav-link active rounded-3 ${style["nav-link"]} py-3 px-4`}
                  aria-current="page"
                  to="/portfolio"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link rounded-3 ${style["nav-link"]} py-3 px-4`}
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  rounded ${style["nav-link"]} py-3 px-4`}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
