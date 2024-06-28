import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetails from "../components/Product/ProductDetails";
import { AllProducts } from "../dev-data/AllProducts";

function Details() {
  const [productItem, setProductItem] = useState({});
  const params = useParams();
  let productId = parseInt(params.productId);

  useEffect(() => {
    setProductItem(() => {
      return AllProducts.find((item) => item.id === productId);
    });
    console.log(AllProducts.find((item) => item.id === productId));
  }, [productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductDetails productItem={productItem} />
    </>
  );
}

export default Details;
