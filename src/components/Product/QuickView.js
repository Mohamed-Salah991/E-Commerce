import React from "react";
import classes from "./QuickView.module.css";
import ProductDetails from "./ProductDetails";
import { AllProducts } from "../Shop/ShopController";
import Modal from "../UI/Modal";

function QuickView(props) {
  let { id } = props;
  if (!id) id = 1;
  const productItem = AllProducts.find((item) => item.id === id);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["quick-view"]}>
        <ProductDetails productItem={productItem} quickView={true} />
      </div>
    </Modal>
  );
}

export default QuickView;
