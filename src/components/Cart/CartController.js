import React, { useEffect } from "react";
import classes from "./CartController.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import PaymentInfo from "./PaymentInfo";
import { BsArrowLeft } from "react-icons/bs";

function CartController() {
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemLength = cartItems.length;
  console.log("Cart Item", cartItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // price={item.totalPrice}
  return (
    <div className={classes["cart-controller"]}>
      <div className={classes.head}>
        <h3>Shopping Cart</h3>
        <div>
          <div className={classes.back}>
            <Link to="/shop">
              <BsArrowLeft />
              <span>Back To Shop</span>
            </Link>
          </div>
          <div className={classes["item-length"]}>
            <span>{cartItemLength} Items</span>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        {cartItemLength === 0 ? <h3>Your Cart Is Empty</h3> : undefined}

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
