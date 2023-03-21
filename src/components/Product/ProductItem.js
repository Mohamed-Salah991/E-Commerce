import React, { useState } from "react";
import classes from "./ProductItem.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";

import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiOutlineHeart } from "react-icons/hi";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function ProductItem(props) {
  const { image, title, price, id } = props;
  const [wishList, setWishList] = useState("");

  const dispatch = useDispatch();

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
        <Link to="/details">
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={classes["info-text"]}>
        <Link to="/details">
          <h3 className={classes.title}>{title}</h3>
        </Link>
        <div className={classes.rate}>
          <AiFillStar className={classes.star} />
          <AiFillStar className={classes.star} />
          <AiFillStar className={classes.star} />
          <AiFillStar className={classes.star} />
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
