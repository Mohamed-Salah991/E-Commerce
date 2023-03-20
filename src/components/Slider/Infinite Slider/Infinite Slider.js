import React from "react";
import classes from "./InfiniteSlider.module.css";

function InfiniteSlider() {
  const images = [
    `logos/business-insider.png`,
    `logos/forbes.png`,
    `logos/techcrunch.png`,
    `logos/the-new-york-times.png`,
    `logos/usa-today.png`,
  ];

  return (
    <div className={classes["infinity-slider"]}>
      <div className={classes["slider-container"]}>
        <div className={classes["inner-container"]}>
          {images.map((i, index) => {
            return (
              <div className={classes.content} key={index}>
                <img alt={`${"infinity Slider"} ${index}`} src={i} />
              </div>
            );
          })}
          {images.map((i, index) => {
            return (
              <div className={classes.content}>
                <img alt={`${"infinity Slider"} ${index}`} src={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlider;
