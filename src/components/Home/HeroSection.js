import React from "react";
import classes from "./Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import banner from "../../assets/Home Page/banner.jpg";
import offImage1 from "../../assets/Home Page/promotion_1.jpeg";
import offImage2 from "../../assets/Home Page/promotion_2.jpeg";
import Slider from "../Slider/Slider";

function HeroSection() {
  const sliderData = [
    {
      url: "../../../assets/Slider/img1.jpg",
      title: "Image1",
    },
  ];
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
