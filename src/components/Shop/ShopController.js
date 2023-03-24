import React, { useState, useEffect } from "react";
import classes from "./Controller.module.css";
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import TopBar from "./TopBar";

function ShopController() {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [productList, setProductList] = useState([]);
  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("none");

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

  const showFilterHandler = () => {
    setShowFilterBar((prev) => !prev);
  };

  console.log("Product List", productList);

  // Filter
  const filteredProduct = productList.filter((product) => {
    if (filterItem === "smartphones") {
      return product.category === "smartphones";
    } else if (filterItem === "laptops") {
      return product.category === "laptops";
    }
    // return all products
    return product;
  });

  // sorting

  const sortedProduct =
    sortItem === "low"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filteredProduct;

  return (
    <div className={classes["product-controller"]}>
      <div className={classes.content}>
        <div className={classes["top"]}>
          <TopBar
            changeFilterState={showFilterHandler}
            setSortItem={setSortItem}
          />
        </div>
        <div className={classes["down"]}>
          <FilterBar
            setFilterItem={setFilterItem}
            showFilter={showFilterBar}
            changeFilterState={showFilterHandler}
          />
          <div className={classes["products"]}>
            <ProductList productList={sortedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopController;
