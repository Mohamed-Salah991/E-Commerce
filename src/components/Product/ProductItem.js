import React, { useState } from "react";
import classes from "./ProductItem.module.css";
import { AiFillStar } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiOutlineHeart } from "react-icons/hi";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function ProductItem(props) {
  const { image, title, price, rate } = props;
  const [wishList, setWishList] = useState("");

  function addToWishList() {
    setWishList((prev) => !prev);
  }

  return (
    <div className={classes["item"]}>
      <span className={classes["right-items"]}>
        <HiOutlineHeart
          onClick={addToWishList}
          className={wishList && classes.active}
        />
        <MdOutlineRemoveRedEye />
        <FiBarChart2 />
      </span>
      {props?.discount && (
        <span className={classes.discount}>{props.discount}% off</span>
      )}

      <div className={classes.image}>
        <img src={image} className={classes.img} alt={title} />
      </div>
      <div className={classes["info-text"]}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.rate}>
          <AiFillStar className={classes.star} />
          <AiFillStar className={classes.star} />
          <AiFillStar className={classes.star} />
          <AiFillStar className={classes.star} />
        </div>
        <div className={classes.price}>
          <h4>{price} $</h4>
          <button className={classes.button}>
            <GoPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
