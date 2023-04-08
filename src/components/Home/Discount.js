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
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      discount: 40,
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 61,
      title: "Leather Straps Wristwatch",
      description: "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar",
      price: 120,
      discountPercentage: 7.14,
      rating: 4.63,
      stock: 91,
      discount: 30,
      brand: "Naviforce",
      category: "mens-watches",
      thumbnail: "https://i.dummyjson.com/data/products/61/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/61/1.jpg",
        "https://i.dummyjson.com/data/products/61/2.png",
        "https://i.dummyjson.com/data/products/61/3.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      discount: 70,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      discount: 65,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      images: [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      discount: 55,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 63,
      title: "Royal Blue Premium Watch",
      description:
        "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch",
      price: 50,
      discount: 40,
      discountPercentage: 2.56,
      rating: 4.89,
      stock: 142,
      brand: "SKMEI 9117",
      category: "mens-watches",
      thumbnail: "https://i.dummyjson.com/data/products/63/thumbnail.webp",
      images: [
        "https://i.dummyjson.com/data/products/63/1.jpg",
        "https://i.dummyjson.com/data/products/63/2.jpg",
        "https://i.dummyjson.com/data/products/63/3.png",
        "https://i.dummyjson.com/data/products/63/4.jpeg",
      ],
    },
  ];

  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    460: {
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
          loop={false}
          navigation={true}
          modules={[Navigation]}
        >
          {discountList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={classes.item}>
                  <ProductItem
                    height="100%"
                    discount={item.discount}
                    image={item.images[0]}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Discount;
