import React from "react";
import classes from "./WishListItem.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { wishListActions } from "../../store/Whish-List";

function WishListItem({ image, title, brand, price, id, quantity }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetailsHandler = () => {
    navigate(`/${id}`);
  };
  return (
    <div className={classes["wish-list-item"]}>
      <div className={classes.content}>
        <div className={classes.image}>
          <img onClick={productDetailsHandler} src={image} alt="" />
        </div>
        <div className={classes.box}>
          <div className={classes["text-info"]}>
            <h3 onClick={productDetailsHandler}>{title}</h3>
            <span> Ziaomi</span>
          </div>
          <div className={classes["amount-controller"]}></div>
          <div className={classes.price}>
            <h3>{price}$</h3>
          </div>
          <div className={classes.delete}>
            <span
              onClick={() => {
                dispatch(wishListActions.delete({ id }));
              }}
            >
              <AiOutlineClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishListItem;
