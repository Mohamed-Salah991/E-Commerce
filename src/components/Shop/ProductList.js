import React from "react";
import classes from "./ProductList.module.css";
import ProductItem from "../Product/ProductItem";

function ProductList() {
  const discountList = [
    {
      title: "Product1",
      discount: 40,
      image: process.env.PUBLIC_URL + `flash/flash-1.png`,
      price: 451,
    },
    {
      title: "Product2",
      discount: 70,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
    {
      title: "Product3",
      discount: 30,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product4",
      discount: 55,
      image: process.env.PUBLIC_URL + `flash/flash-4.png`,
      price: 451,
    },
    {
      title: "Product5",
      discount: 40,
      image: process.env.PUBLIC_URL + `flash/flash-5.png`,
      price: 451,
    },
    {
      title: "Product6",
      discount: 30,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product7",
      discount: 60,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
  ];
  return (
    <div className={classes["product-list"]}>
      <div className={classes.content}>
        {discountList.map((item) => {
          return (
            <ProductItem
              discount={item.discount}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
