import React from "react";
import classes from "./Controller.module.css";
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import TopBar from "./TopBar";

function ShopController() {
  return (
    <div className={classes["product-controller"]}>
      <div className={classes.content}>
        <div className={classes["top"]}>
          <TopBar />
        </div>
        <div className={classes["down"]}>
          <FilterBar />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ShopController;
