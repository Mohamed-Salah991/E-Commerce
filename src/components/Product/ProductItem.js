import React, { useState } from "react";
import classes from "./ProductItem.module.css";
import QuickView from "./QuickView";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { wishListActions } from "../../store/Whish-List";

import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiOutlineHeart } from "react-icons/hi";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function ProductItem(props) {
  const { image, title, price, id, rate } = props;

  const [wishList, setWishList] = useState("");
  const [showQuickView, setShowQuickView] = useState(false);

  const dispatch = useDispatch();

  function addToWishList() {
    setWishList((prev) => !prev);
    dispatch(
      wishListActions.add({
        id,
        title,
        price,
        image,
      })
    );
  }

  function showQuickViewHandler() {
    // show quick view component, model
    setShowQuickView((prev) => !prev);
  }

  return (
    <div
      className={`${classes["item"]} ${
        props.height ? `${classes.item} ${classes.homePage}` : ""
      }`}
    >
      {showQuickView && <QuickView id={2} onClose={showQuickViewHandler} />}

      <span className={classes["right-items"]}>
        <HiOutlineHeart
          onClick={addToWishList}
          className={wishList && classes.active}
        />
        <MdOutlineRemoveRedEye onClick={showQuickViewHandler} />
        <FiBarChart2 />
      </span>
      {props?.discount && (
        <span className={classes.discount}>{props.discount}% off</span>
      )}

      <div className={classes.image}>
        <Link to={`/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={classes["info-text"]}>
        <Link to={`/${id}`}>
          <h3 className={classes.title}>{title}</h3>
        </Link>
        <div className={classes.rate}>
          {Array.from({ length: parseInt(rate) }).map((_, index) => (
            <AiFillStar key={index} className={classes.star} />
          ))}
          {Array.from({ length: 5 - parseInt(rate) }).map((_, index) => (
            <AiFillStar
              key={index}
              className={`${classes.star} ${classes.blur}`}
            />
          ))}
          <span>({parseInt(rate)})</span>
        </div>
        <div className={classes.price}>
          <h4>{price} $</h4>

          <button
            onClick={() => {
              dispatch(
                cartActions.add({
                  id,
                  title,
                  price,
                  image,
                })
              );
            }}
            className={classes.button}
          >
            <GoPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
