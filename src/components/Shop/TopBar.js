import React from "react";
import classes from "./TopBar.module.css";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsList } from "react-icons/bs";
function TopBar() {
  return (
    <div className={classes["top-bar"]}>
      <div className={classes.content}>
        <div className={classes.query}>
          <h4>Searching for “ mobile phone ”</h4>
          <span>48 results found</span>
        </div>
        <div className={classes.sort}>
          <span>Sort by: </span>
          <select name="" id="">
            <option value="">Phones</option>
            <option value="">Mobiles</option>
            <option value="">Laptops</option>
          </select>
        </div>
        <div className={classes.view}>
          <button>
            <HiOutlineViewGrid />
          </button>
          <button>
            <BsList />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
