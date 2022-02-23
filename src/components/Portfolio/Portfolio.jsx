import React from "react";
import styles from "./portfolio.module.css";
import Star from "./../Star/Star";
import im from "./cake.png";
import im1 from "./cabin.png";
import im2 from "./circus.png";
import im3 from "./game.png";
import im4 from "./safe.png";
import im5 from "./submarine.png";
import Modal from "../Modal/Modal";
import Item from "../Item/Item";
export default function Portfolio() {
  return (
    <>
      <div className="portfolio container pt-1  ">
        <h2
          className={`${styles.head} text-center text-uppercase  mt-4 pt-5 mb-0`}
        >
          Portfolio
        </h2>

        <Star Dark={true} />

        <div className="row pb-4 ">
          <div className="col-md-4 ">
            <div>
              <Item pic={im1} id={"first"} />

              <Modal header={"LOG CABIN"} pic={im1} id={"first"} />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <Item pic={im} id={"second"} />

              <Modal header={"TASTY CAKE"} pic={im} id={"second"} />
            </div>
          </div>
          <div className="col-md-4 ">
            <div>
              <Item pic={im2} id={"third"} />

              <Modal header={"CIRCUS TENT"} pic={im2} id={"third"} />
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-4">
            <div>
              <Item pic={im3} id={"fourth"} />

              <Modal header={"CONTROLLER"} pic={im3} id={"fourth"} />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <Item pic={im4} id={"fifth"} />

              <Modal header={"LOCKED SAFE"} pic={im4} id={"fifth"} />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <Item pic={im5} id={"sixth"} />

              <Modal header={"SUBMARINE"} pic={im5} id={"sixth"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
