import React from "react";
import classes from "./WishListController.module.css";
import WishListItem from "./WishListItem";
import { useSelector } from "react-redux";
import WhishList from "../../store/Whish-List";

function WishListController() {
  const wishListItems = useSelector((store) => store.wishList.items);

  console.log("Wish List Item ", wishListItems);
  return (
    <div className={classes.controller}>
      <div className={classes.content}>
        {wishListItems.map((item) => {
          return (
            <WishListItem
              key={item.id}
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
