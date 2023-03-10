import React from "react";
import classes from "./Search.module.css";

function Search() {
  return (
    <>
      <input
        className={classes.input}
        type="search"
        placeholder="Search For Product..."
        id="header-search"
      />
      <button className={classes.button}>Search</button>
    </>
  );
}

export default Search;
