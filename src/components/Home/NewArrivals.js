import React from "react";
import classes from "./NewArrivals.module.css";

function NewArrivals() {
  const newArrivalsItems = [
    {
      title: "Product",
      img: "./arrivals/arrivals1.png",
      price: 492,
    },
    {
      title: "Product",
      img: "./arrivals/arrivals2.png",
      price: 492,
    },
    {
      title: "Product",
      img: "./arrivals/arrivals3.png",
      price: 492,
    },
    {
      title: "Product",
      img: "./arrivals/arrivals4.png",
      price: 492,
    },
    {
      title: "Product",
      img: "./arrivals/arrivals5.png",
      price: 492,
    },
  ];
  return (
    <div className={classes["new-arrivals"]}>
      <h2 className={classes.h2}>New Arrivals </h2>
      <div className={classes.content}>
        <div className={classes.items}>
          {newArrivalsItems.map((item, index) => {
            return (
              <div className={classes.item}>
                <div className={classes.image}>
                  <img src={item.img} alt="" />
                </div>
                <div className={classes.price}>
                  <h4>{`${item.title} ${index + 1}`}</h4>
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
