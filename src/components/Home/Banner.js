import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Banner.module.css";

function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.content}>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <div className={classes.image}>
            <img src="./images/banner-1.png" alt="" />
          </div>
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <div className={classes.image}>
            <img src="./images/banner-2.png" alt="" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Banner;
