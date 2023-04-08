import React, { useEffect, useState } from "react";
import classes from "./ProductDetails.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { wishListActions } from "../../store/Whish-List";

import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { AllProducts } from "../Shop/ShopController";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import sliderStyle from "./imageSlider.module.css";

function ProductDetails() {
  const [productItem, setProductItem] = useState({});
  const [wishList, setWishList] = useState("");

  const params = useParams();
  const dispatch = useDispatch();

  const productId = parseInt(params.productId);
  console.log(productId);

  useEffect(() => {
    setProductItem(() => {
      return AllProducts.find((item) => item.id === productId);
    });
  }, [productId]);

  console.log(productItem);

  function addToWishList() {
    setWishList((prev) => !prev);
    dispatch(
      wishListActions.add({
        id: productItem.id,
        title: productItem.title,
        price: productItem.price,
        image: productItem.images[0],
      })
    );
  }

  function addToCart() {
    dispatch(
      cartActions.add({
        id: productItem.id,
        title: productItem.title,
        price: productItem.price,
        image: productItem.images[0],
      })
    );
  }

  return (
    <div className={classes["product-details"]}>
      <div className={classes.content}>
        <div className={classes.up}>
          <div className={classes["images"]}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className={sliderStyle.swiper}
            >
              {productItem.images?.map((img, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className={sliderStyle["swiper-slide"]}
                  >
                    <div className={classes.image}>
                      <img src={img} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={classes["info"]}>
            <div className={classes.title}>
              <h1>{productItem.title}</h1>
              <span className={classes.brand}>
                Brand: <span>{productItem.brand}</span>
              </span>
            </div>
            <div className={classes.rate}>
              <span>Rated:</span>
              <AiFillStar className={classes.star} />
              <AiFillStar className={classes.star} />
              <AiFillStar className={classes.star} />
              <AiFillStar className={classes.star} />
            </div>
            <div className={classes.price}>
              <h4>{productItem.price}$</h4>
              <span>Stock Available</span>
            </div>
            <div className={classes.cart}>
              <button onClick={addToCart}>Add To Cart</button>
              <span>
                <HiOutlineHeart
                  onClick={addToWishList}
                  className={wishList && classes.active}
                />
              </span>
            </div>
          </div>
        </div>
        <div className={classes.down}>
          <div className={classes.description}>
            <h3>Description</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              nisi reprehenderit cum reiciendis repellendus, aspernatur odit
              officiis maiores saepe blanditiis sint ipsam, nesciunt impedit
              dolores. Aliquam explicabo a obcaecati. Perferendis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
