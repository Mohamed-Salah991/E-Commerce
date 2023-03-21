import React from "react";
import classes from "./PaymentInfo.module.css";
import { useSelector } from "react-redux";

function PaymentInfo() {
  const total = useSelector((store) => store.cart.totalAmount);
  return (
    <div className={classes["payment-info"]}>
      <div className={classes.content}>
        <h3>Payment Info</h3>
        <div className={classes.method}>
          <h4>Payment Method: </h4>
          <div>
            <span>
              <img src="logos/visa-logo.png" alt="" />
            </span>
            <span>
              <img src="logos/paypal-logo.png" alt="" />
            </span>
          </div>
        </div>
        <div className={classes.total}>
          <h3>
            Total: <span>{total}$</span>
          </h3>
        </div>
        <div className={classes["check-out"]}>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
