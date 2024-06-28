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
// import "swiper/css/pagination";

SwiperCore.use([Navigation]);

function Discount() {
  const discountList = [
    {
      id: 121,
      title: "iPhone 5s",
      description:
        "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
      category: "smartphones",
      price: 199.99,
      discountPercentage: 11.85,
      rating: 3.92,
      stock: 65,
      tags: ["smartphones", "apple"],
      brand: "Apple",
      sku: "AZ1L68SM",
      weight: 4,
      dimensions: {
        width: 8.49,
        height: 25.34,
        depth: 18.12,
      },
      warrantyInformation: "1 week warranty",
      shippingInformation: "Ships in 1 week",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.625Z",
          reviewerName: "Wyatt Perry",
          reviewerEmail: "wyatt.perry@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Awesome product!",
          date: "2024-05-23T08:56:21.625Z",
          reviewerName: "Olivia Anderson",
          reviewerEmail: "olivia.anderson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2024-05-23T08:56:21.625Z",
          reviewerName: "Mateo Nguyen",
          reviewerEmail: "mateo.nguyen@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 2,
      meta: {
        createdAt: "2024-05-23T08:56:21.625Z",
        updatedAt: "2024-05-23T08:56:21.625Z",
        barcode: "2903942810911",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png",
    },
    {
      id: 93,
      title: "Brown Leather Belt Watch",
      description:
        "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
      category: "mens-watches",
      price: 89.99,
      discountPercentage: 15.01,
      rating: 4.47,
      stock: 69,
      tags: ["watches", "leather watches"],
      brand: "Fashion Timepieces",
      sku: "WGZ21MSA",
      weight: 10,
      dimensions: {
        width: 18.39,
        height: 10.82,
        depth: 10.52,
      },
      warrantyInformation: "3 months warranty",
      shippingInformation: "Ships in 1 week",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 3,
          comment: "Very dissatisfied!",
          date: "2024-05-23T08:56:21.624Z",
          reviewerName: "Oscar Powers",
          reviewerEmail: "oscar.powers@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.624Z",
          reviewerName: "Eli Ward",
          reviewerEmail: "eli.ward@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.624Z",
          reviewerName: "Stella Hughes",
          reviewerEmail: "stella.hughes@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 10,
      meta: {
        createdAt: "2024-05-23T08:56:21.624Z",
        updatedAt: "2024-05-23T08:56:21.624Z",
        barcode: "9559180055872",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
    },
    {
      id: 131,
      title: "Samsung Galaxy S7",
      description:
        "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
      category: "smartphones",
      price: 299.99,
      discountPercentage: 8.83,
      rating: 4.9,
      stock: 55,
      tags: ["smartphones", "samsung galaxy"],
      brand: "Samsung",
      sku: "VZF4Z58Z",
      weight: 8,
      dimensions: {
        width: 23.33,
        height: 27.33,
        depth: 27.02,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.625Z",
          reviewerName: "Jace Smith",
          reviewerEmail: "jace.smith@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.625Z",
          reviewerName: "Ruby Andrews",
          reviewerEmail: "ruby.andrews@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.625Z",
          reviewerName: "Aria Roberts",
          reviewerEmail: "aria.roberts@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.625Z",
        updatedAt: "2024-05-23T08:56:21.625Z",
        barcode: "8841359359362",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/2.png",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/thumbnail.png",
    },
    {
      id: 78,
      title: "Apple MacBook Pro 14 Inch Space Grey",
      description:
        "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
      category: "laptops",
      price: 1999.99,
      discountPercentage: 9.25,
      rating: 3.13,
      stock: 39,
      tags: ["laptops", "apple"],
      brand: "Apple",
      sku: "QDKO6NRJ",
      weight: 4,
      dimensions: {
        width: 12.38,
        height: 21.55,
        depth: 27.95,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 week",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "Hunter Gordon",
          reviewerEmail: "hunter.gordon@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "Emma Wilson",
          reviewerEmail: "emma.wilson@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "David Martinez",
          reviewerEmail: "david.martinez@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.622Z",
        updatedAt: "2024-05-23T08:56:21.622Z",
        barcode: "3883623063065",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    },
    {
      id: 80,
      title: "Huawei Matebook X Pro",
      description:
        "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
      category: "laptops",
      price: 1399.99,
      discountPercentage: 15.25,
      rating: 4.62,
      stock: 34,
      tags: ["laptops"],
      brand: "Huawei",
      sku: "U2CBNNB0",
      weight: 9,
      dimensions: {
        width: 22.11,
        height: 11.11,
        depth: 23.07,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "Samantha Howard",
          reviewerEmail: "samantha.howard@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Would not buy again!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "Daniel Cook",
          reviewerEmail: "daniel.cook@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "Brayden Fleming",
          reviewerEmail: "brayden.fleming@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.622Z",
        updatedAt: "2024-05-23T08:56:21.622Z",
        barcode: "1232723732298",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
    },
    {
      id: 191,
      title: "Rolex Cellini Moonphase",
      description:
        "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
      category: "womens-watches",
      price: 15999.99,
      discountPercentage: 18.76,
      rating: 3.41,
      stock: 66,
      tags: ["watches", "luxury watches"],
      brand: "Rolex",
      sku: "E8CYFYQL",
      weight: 5,
      dimensions: {
        width: 22.54,
        height: 20.15,
        depth: 25.37,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Logan Lee",
          reviewerEmail: "logan.lee@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Would not recommend!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Leah Henderson",
          reviewerEmail: "leah.henderson@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.628Z",
          reviewerName: "Mateo Nguyen",
          reviewerEmail: "mateo.nguyen@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.628Z",
        updatedAt: "2024-05-23T08:56:21.628Z",
        barcode: "3517608890772",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/1.png",
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/2.png",
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
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
          spaceBetween={10}
          loop={false}
          navigation={true}
        >
          {discountList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={`${classes.item} ${classes[`item${index}`]}`}>
                  <ProductItem
                    height="100%"
                    discount={item.discount}
                    image={item.images[0]}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    rate={item.rating}
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
