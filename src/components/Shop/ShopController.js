import React, { useState, useEffect } from "react";
import classes from "./Controller.module.css";
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import TopBar from "./TopBar";

function ShopController() {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const showFilterHandler = () => {
    setShowFilterBar((prev) => !prev);
  };

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      console.log("Get Data !");

      setProductList(data.products);

      // data.products.forEach((product) => {
      //   console.log(product);
      // });
      return data;
    };

    fetchData();
  }, []);

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
          <div className={classes["products"]}>
            <ProductList productList={productList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopController;
