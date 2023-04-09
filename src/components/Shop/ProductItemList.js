import React, { useState } from "react";
import classes from "./ProductItemList.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { wishListActions } from "../../store/Whish-List";

import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiOutlineHeart } from "react-icons/hi";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function ProductItemList(props) {
  const { image, title, price, id, description, brand } = props;
  const [wishList, setWishList] = useState("");

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

  return (
    <div
      className={`${classes["item"]} ${
        props.height ? `${classes.item} ${classes.homePage}` : ""
      }`}
    >
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
        <Link to={`/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={classes["info-text"]}>
        <Link to={`/${id}`}>
          <h3 className={classes.title}>{title}</h3>
        </Link>
        <div>
          <span className={classes.brand}>
            Brand: <span>{brand}</span>
          </span>
        </div>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
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

export default ProductItemList;
