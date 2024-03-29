import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/Cart";
import { AiOutlineClose } from "react-icons/ai";

function CartItem({ image, title, brand, price, id, quantity }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetailsHandler = () => {
    navigate(`/${id}`);
  };
  return (
    <div className={classes["cart-item"]}>
      <div className={classes.content}>
        <div className={classes.image}>
          <img onClick={productDetailsHandler} src={image} alt="product" />
        </div>
        <div className={classes.box}>
          <div className={classes["text-info"]}>
            <h3 onClick={productDetailsHandler}>{title}</h3>
            <span> Ziaomi</span>
          </div>
          <div className={classes["amount-controller"]}>
            <button
              className={`${quantity === 1 ? classes.disable : ""}`}
              onClick={() => {
                if (quantity > 1) dispatch(cartActions.decrement({ id }));
              }}
            >
              -
            </button>
            <span> x{quantity} </span>
            <button
              onClick={() => {
                dispatch(cartActions.increment({ id }));
              }}
            >
              +
            </button>
          </div>
          <div className={classes.price}>
            <h3>{price}$</h3>
          </div>
          <div className={classes.delete}>
            <span
              onClick={() => {
                dispatch(cartActions.delete({ id }));
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

export default CartItem;
