import React from "react";
import classes from "./CartController.module.css";
import CartItem from "./CartItem";

function CartController() {
  return (
    <div className={classes["CartController"]}>
      <div className={classes.content}>
        <CartItem />
      </div>
    </div>
  );
}

export default CartController;
