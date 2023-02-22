import React from "react";
import classes from "./InfiniteSlider.module.css";

function InfiniteSlider() {
  const images = [
    process.env.PUBLIC_URL + `Slider/img1.jpg`,
    process.env.PUBLIC_URL + `Slider/img2.jpg`,
    process.env.PUBLIC_URL + `Slider/img3.jpg`,
    process.env.PUBLIC_URL + `Slider/img4.jpg`,
    process.env.PUBLIC_URL + `Slider/img5.jpg`,
    process.env.PUBLIC_URL + `Slider/img1.jpg`,
    process.env.PUBLIC_URL + `Slider/img2.jpg`,
    process.env.PUBLIC_URL + `Slider/img3.jpg`,
  ];
  return (
    <div className={classes["infinity-slider"]}>
      <div className={classes["slider-container"]}>
        <div className={classes["inner-container"]}>
          {images.map((i) => {
            return (
              <div className={classes.content}>
                <img alt="infinity Slider" src={i} />
              </div>
            );
          })}
          {images.map((i) => {
            return (
              <div className={classes.content}>
                <img alt="infinity Slider" src={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlider;
