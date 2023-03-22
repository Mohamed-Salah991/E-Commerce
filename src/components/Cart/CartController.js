import React, { useEffect } from "react";
import classes from "./CartController.module.css";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import PaymentInfo from "./PaymentInfo";

function CartController() {
  const cartItems = useSelector((store) => store.cart.items);

  console.log("Cart Item", cartItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // price={item.totalPrice}
  return (
    <div className={classes["cart-controller"]}>
      <div className={classes.content}>
        <div className={classes["cart-list"]}>
          {cartItems.map((item) => {
            return (
              <CartItem
                image={item.image}
                title={item.title}
                price={item.totalPrice}
                id={item.id}
                quantity={item.quantity}
              />
            );
          })}
        </div>
        <PaymentInfo />
      </div>
    </div>
  );
}

export default CartController;
