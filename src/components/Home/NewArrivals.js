import React from "react";
import classes from "./NewArrivals.module.css";
import { Link } from "react-router-dom";
import { AllProducts } from "../../dev-data/AllProducts";

function NewArrivals() {
  const newArrivalsItems = [
    AllProducts.find((item) => item.id === 93),
    AllProducts.find((item) => item.id === 94),
    AllProducts.find((item) => item.id === 95),
    AllProducts.find((item) => item.id === 96),
    AllProducts.find((item) => item.id === 98),
  ];

  return (
    <div className={classes["new-arrivals"]}>
      <h2 className={classes.h2}>New Arrivals </h2>
      <div className={classes.content}>
        <div className={classes.items}>
          {newArrivalsItems.map((item, index) => {
            return (
              <div className={classes.item} key={index}>
                <Link to={`/${item.id}`}>
                  <div className={classes.image}>
                    <img src={item.thumbnail} alt="" />
                  </div>
                </Link>
                <div className={classes.price}>
                  <h4>{`${item.title}`}</h4>
                  <h4>${item.price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
