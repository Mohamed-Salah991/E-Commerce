import React from "react";
import classes from "./Discount.module.css";
import ProductItem from "../Product/ProductItem";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      title: "Product5",
      discount: 40,
      image: process.env.PUBLIC_URL + `flash/flash-5.png`,
      price: 451,
    },
    {
      title: "Product6",
      discount: 30,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product7",
      discount: 60,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
  ];

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={classes["control-btn-prev"]} onClick={onClick}>
        <button className={classes["control-btn"]}>
          <BiLeftArrowAlt className={classes.arrow} />
        </button>
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={classes["control-btn-next"]} onClick={onClick}>
        <button className={classes["control-btn"]}>
          <BiRightArrowAlt className={classes.arrow} />
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.discount}>
      <h2 className={classes.h2}>Big Discount </h2>
      <div className={classes.wrapper}>
        <Slider {...settings}>
          {discountList.map((item) => {
            return (
              <ProductItem
                discount={item.discount}
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
