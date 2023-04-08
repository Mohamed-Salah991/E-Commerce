import React from "react";
import classes from "./TopBar.module.css";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
function TopBar(props) {
  const filterItem = props.filterItem;
  const productsLength = props.productsLength;

  const changeFilterHandler = () => {
    props.changeFilterState();
  };
  const changeViewHandler = (current) => {
    if (current === "grid") props.setGridView(true);
    else props.setGridView(false);
  };
  const changeSortingHandler = (event) => {
    console.log("Event", event.target.value);
    props.setSortItem(event.target.value);
  };

  return (
    <div className={classes["top-bar"]}>
      <div className={classes.content}>
        <div className={classes.query}>
          {filterItem !== "all" ? (
            <h4>Search For {`"${filterItem.toUpperCase()}"`}</h4>
          ) : (
            <h4>All Products </h4>
          )}
          <span>{productsLength} results found</span>
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
          <button onClick={() => changeViewHandler("grid")}>
            <HiOutlineViewGrid />
          </button>
          <button onClick={() => changeViewHandler("list")}>
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
