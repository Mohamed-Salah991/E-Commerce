import React from "react";
import classes from "./Discount.module.css";
import ProductItem from "../Product/ProductItem";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
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
      title: "Product2",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
    {
      title: "Product3",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product4",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-4.png`,
      price: 451,
    },
    {
      title: "Product5",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-5.png`,
      price: 451,
    },
    {
      title: "Product6",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-3.png`,
      price: 451,
    },
    {
      title: "Product7",
      discount: 0,
      image: process.env.PUBLIC_URL + `flash/flash-2.png`,
      price: 451,
    },
  ];

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={classes["control-btn-prev"]} onClick={onClick}>
        <button className={classes["control-btn"]}>
          <AiOutlineArrowLeft className={classes.arrow} />
        </button>
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={classes["control-btn-next"]} onClick={onClick}>
        <button className={classes["control-btn"]}>
          <AiOutlineArrowRight className={classes.arrow} />
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
