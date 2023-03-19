import React, { useState } from "react";
import classes from "./Controller.module.css";
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import TopBar from "./TopBar";

function ShopController() {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const showFilterHandler = () => {
    setShowFilterBar((prev) => !prev);
  };

  return (
    <div className={classes["product-controller"]}>
      <div className={classes.content}>
        <div className={classes["top"]}>
          <TopBar changeFilterState={showFilterHandler} />
        </div>
        <div className={classes["down"]}>
          <FilterBar
            showFilter={showFilterBar}
            changeFilterState={showFilterHandler}
          />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ShopController;