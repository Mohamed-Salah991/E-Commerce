import React, { useEffect } from "react";
import ShopController from "../components/Shop/ShopController";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <ShopController />
    </>
  );
}

export default Shop;
