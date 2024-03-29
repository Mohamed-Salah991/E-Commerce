import React, { useEffect } from "react";
import classes from "./WishListController.module.css";
import WishListItem from "./WishListItem";
import { useSelector, useDispatch } from "react-redux";
import { wishListActions } from "../../store/Whish-List";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function WishListController() {
  const wishListItems = useSelector((store) => store.wishList.items);
  const dispatch = useDispatch();
  const wishListLength = wishListItems.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clearWhishListItems = () => {
    dispatch(wishListActions.clear());
  };

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
            <button
              onClick={clearWhishListItems}
              className={`${classes["clear-wish-list-btn"]} ${
                wishListLength === 0 ? classes.empty : undefined
              }`}
            >
              Clear Wish List
            </button>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        {wishListLength === 0 ? (
          <div style={{ maxWidth: "500px" }}>
            <h3 style={{ fontWeight: "500" }}>Wish List Is Empty</h3>
            <img
              style={{ maxWidth: "100%" }}
              // src="https://static.oxinis.com/healthmug/image/healthmug/empty-wishlist.webp"
              src="empty-wishlist.webp"
              alt=""
            />
          </div>
        ) : undefined}
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
