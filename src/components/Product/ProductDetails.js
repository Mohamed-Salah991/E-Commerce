import React from "react";
import classes from "./ProductDetails.module.css";
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import sliderStyle from "./imageSlider.module.css";

const imageList = [
  "flash/flash-1.png",
  "flash/flash-2.png",
  "flash/flash-3.png",
];
function ProductDetails() {
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
              {imageList.map((img, index) => {
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
              <h1>Classic Rolex Watch</h1>
              <span className={classes.brand}>
                Brand: <span>Ziaomi</span>
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
              <h4>42.00$</h4>
              <span>Stock Available</span>
            </div>
            <div className={classes.cart}>
              <button>Add To Cart</button>
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
              dolores. Aliquam explicabo a obcaecati. Perferendis?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
