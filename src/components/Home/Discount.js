import React from "react";
import classes from "./Discount.module.css";
import ProductItem from "../Product/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);
function Discount() {
  const discountList = [
    {
      title: "Product1",
      discount: 40,
      image: process.env.PUBLIC_URL + `flash/flash-1.png`,
      price: 451,
    },
    {
      title: "Product2",
      discount: 70,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
    {
      title: "Product3",
      discount: 30,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product4",
      discount: 55,
      image: process.env.PUBLIC_URL + `flash/flash-4.png`,
      price: 451,
    },
    {
      title: "Product1",
      discount: 30,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product2",
      discount: 60,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
    {
      title: "Product1",
      discount: 30,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product2",
      discount: 60,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
  ];

  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };

  return (
    <div className={classes.discount}>
      <h2 className={classes.h2}>Big Discount </h2>
      <div className={classes.wrapper}>
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {discountList.map((item) => {
            return (
              <SwiperSlide>
                <ProductItem
                  discount={item.discount}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Discount;
