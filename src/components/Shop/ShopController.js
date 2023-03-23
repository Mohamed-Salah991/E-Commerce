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
  console.log("Product List", productList);
  const [filterItem, setFilterItem] = useState("laptops");

  const filterItemHandler = () => {};

  const filteredProduct = productList.filter((product) => {
    if (filterItem === "all") return product;
    else if (filterItem === "smartphones") {
      return product.category === "smartphones";
    } else if (filterItem === "laptops") {
      return product.category === "laptops";
    }
  });

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
            <ProductList productList={filteredProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopController;
