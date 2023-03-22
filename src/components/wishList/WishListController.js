import React from "react";
import classes from "./WishListController.module.css";
import WishListItem from "./WishListItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function WishListController() {
  const wishListItems = useSelector((store) => store.wishList.items);
  const wishListLength = wishListItems.length;

  return (
    <div className={classes.controller}>
      <div className={classes.head}>
        <h3>Wish List </h3>
        <div>
          <div className={classes.back}>
            <Link to="/shop">
              <BsArrowLeft />
              <span>Back To Shop</span>
            </Link>
          </div>
          <div className={classes["item-length"]}>
            <span>{wishListLength} Items</span>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        {wishListItems.map((item) => {
          return (
            <WishListItem
              key={item.id}
              id={item.id}
              price={item.price}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WishListController;
