import React from "react";
import classes from "./Trust.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";

function Trust() {
  return (
    <div className={classes.trust}>
      <div className={classes.content}>
        <div className={classes["box-info"]}>
          <span>
            <TbTruckDelivery />
          </span>
          <h4>Worldwide Delivery</h4>
        </div>
        <div className={classes["box-info"]}>
          <span>
            <MdPayment />
          </span>
          <h4>Safe Payment</h4>
        </div>
        <div className={classes["box-info"]}>
          <span>
            <VscWorkspaceTrusted />
          </span>
          <h4>Shop With Confidence</h4>
        </div>
        <div className={classes["box-info"]}>
          <span>
            <BiSupport />
          </span>
          <h4>24/7 Support</h4>
        </div>
      </div>
    </div>
  );
}

export default Trust;
