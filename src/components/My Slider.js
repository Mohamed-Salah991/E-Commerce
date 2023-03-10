import React from "react";
import classes from "./Home/Discount.module.css";
import ProductItem from "./Product/ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Discount() {
  const discountList = [
    {
      title: "Product1",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-1.png`,
      price: 451,
    },
    {
      title: "Product1",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
    {
      title: "Product1",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product1",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-4.png`,
      price: 451,
    },
    {
      title: "Product1",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
    {
      title: "Product1",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product1",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-4.png`,
      price: 451,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.discount}>
      <h2 className={classes.h2}>Test </h2>
      <div className={classes.wrapper}>
        <Slider {...settings}>
          {discountList.map((item) => {
            return (
              <ProductItem
                image={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Discount;
