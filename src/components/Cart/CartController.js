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
        {cartItemLength === 0 ? (
          <div style={{ flex: "1" }}>
            <h3 style={{ fontWeight: "500" }}>Your Cart Is Empty</h3>
            <img
              style={{ maxWidth: "100%" }}
              // src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4659169-3871550.png"
              src="empty-cart.png"
              alt=""
            />
          </div>
        ) : undefined}
        {cartItemLength !== 0 ? (
          <div className={classes["cart-list"]}>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.totalPrice}
                  id={item.id}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
        ) : undefined}

        <PaymentInfo />
      </div>
    </div>
  );
}

export default CartController;
