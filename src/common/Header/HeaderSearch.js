import React from "react";
import classes from "./HeaderSearch.module.css";

function HeaderSearch() {
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

export default HeaderSearch;
