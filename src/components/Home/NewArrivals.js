import React from "react";
import classes from "./NewArrivals.module.css";
import { Link } from "react-router-dom";

function NewArrivals() {
  const newArrivalsItems = [
    {
      title: "Leather Strap",
      img: "https://i.dummyjson.com/data/products/64/2.webp",
      price: 46,
      id: 64,
    },
    {
      title: "Fashion Magnetic",
      img: "https://i.dummyjson.com/data/products/67/1.jpg",
      price: 60,
      id: 67,
    },
    {
      title: "Golden Watch",
      img: "https://i.dummyjson.com/data/products/69/1.jpg",
      id: 69,
      price: 90,
    },
    {
      title: "Stainless Steel",
      img: "https://i.dummyjson.com/data/products/65/3.jpg",
      price: 47,
      id: 65,
    },
    {
      title: "Leather Wristwatch",
      img: "https://i.dummyjson.com/data/products/61/3.jpg",
      price: 120,
      id: 61,
    },
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
                    <img src={item.img} alt="" />
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
