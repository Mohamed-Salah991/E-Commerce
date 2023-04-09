import React, { useState, useEffect } from "react";
import classes from "./ProductList.module.css";
import ProductItem from "../Product/ProductItem";
import Pagination from "./Pagination";
import ProductItemList from "./ProductItemList";

function ProductList(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    setProductList(props.productList);
    setCurrentPage(1);
  }, [props.productList]);

  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCT_PER_PAGE = 8;
  const pages = Math.ceil(productList.length / PRODUCT_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;
  const orderedProducts = productList.slice(startIndex, finishIndex);

  return (
    <div className={classes["product-list"]}>
      <div
        className={`${classes["content"]} ${
          props.gridView ? "" : classes.list
        }`}
      >
        {orderedProducts?.map((item) => {
          return props.gridView ? (
            <ProductItem
              key={item.id}
              id={item.id}
              image={item.images[0]}
              title={item.title}
              price={item.price}
              description={item.description}
              brand={item.brand}
            />
          ) : (
            <ProductItemList
              key={item.id}
              id={item.id}
              image={item.images[0]}
              title={item.title}
              price={item.price}
              description={item.description}
              brand={item.brand}
            />
          );
        })}
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ProductList;
