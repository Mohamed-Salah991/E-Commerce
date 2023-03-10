import React from "react";
import classes from "./HeroSection.module.css";
import offImage1 from "../../assets/Home Page/promotion_1.jpeg";
import offImage2 from "../../assets/Home Page/promotion_2.jpeg";
import Slider from "../Slider/Slider";

function HeroSection() {
  return (
    <div className={classes.slider}>
      <div className={classes.banner}>
        <Slider />
      </div>
      <div className={classes["right-side"]}>
        <img src={offImage1} alt="" />
        <img src={offImage2} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
