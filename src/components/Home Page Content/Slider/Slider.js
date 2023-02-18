import React from "react";
import classes from "./Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import banner from "../../../assets/Home Page/banner.jpg";
import offImage1 from "../../../assets/Home Page/promotion_1.jpeg";
import offImage2 from "../../../assets/Home Page/promotion_2.jpeg";

function Slider() {
  return (
    <div className={classes.slider}>
      <div className={classes.banner}>
        <span className={classes.leftArrow}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <img src={banner} alt="" />

        <span className={classes.rightArrow}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
      <div className={classes["right-side"]}>
        <img src={offImage1} alt="" />
        <img src={offImage2} alt="" />
      </div>
    </div>
  );
}

export default Slider;
