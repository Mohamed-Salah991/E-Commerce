import React from "react";
import classes from "./Banner.module.css";

function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src="./images/banner-1.png" alt="" />
        </div>
        <div className={classes.image}>
          <img src="./images/banner-2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
