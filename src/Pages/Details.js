import React, { useEffect } from "react";
import ProductDetails from "../components/Product/ProductDetails";

function Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductDetails />
    </>
  );
}

export default Details;
