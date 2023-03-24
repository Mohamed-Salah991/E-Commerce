import React from "react";
import classes from "./TopBar.module.css";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
function TopBar(props) {
  const changeFilterHandler = () => {
    props.changeFilterState();
  };
  const changeSortingHandler = (event) => {
    console.log("Event", event.target.value);
    props.setSortItem(event.target.value);
  };
  return (
    <div className={classes["top-bar"]}>
      <div className={classes.content}>
        <div className={classes.query}>
          <h4>Searching for “ mobile phone ”</h4>
          <span>48 results found</span>
        </div>
        <div className={classes.sort}>
          <span>Sort by: </span>
          <select onChange={changeSortingHandler} name="sort" id="sort-price">
            <option name="sort" value="none">
              None
            </option>
            <option name="sort" value="low">
              Low Price
            </option>
            <option name="sort" value="high">
              High Price
            </option>
          </select>
        </div>
        <div className={classes.view}>
          <button>
            <HiOutlineViewGrid />
          </button>
          <button>
            <BsList />
          </button>
          <button
            onClick={changeFilterHandler}
            className={classes["filter-icon"]}
          >
            <FiFilter />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
