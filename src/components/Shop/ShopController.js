import React, { useState, useEffect } from "react";
import classes from "./Controller.module.css";
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import TopBar from "./TopBar";

export const AllProducts = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
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
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
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
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
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
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg",
      "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    ],
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    ],
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
      "https://i.dummyjson.com/data/products/9/4.jpg",
      "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    ],
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    images: [
      "https://i.dummyjson.com/data/products/10/1.jpg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
      "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
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
    id: 62,
    title: "Waterproof Leather Brand Watch",
    description:
      "Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours",
    price: 46,
    discountPercentage: 3.15,
    rating: 4.05,
    stock: 95,
    brand: "SKMEI 9117",
    category: "mens-watches",
    thumbnail: "https://i.dummyjson.com/data/products/62/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/62/1.jpg",
      "https://i.dummyjson.com/data/products/62/2.jpg",
    ],
  },
  {
    id: 63,
    title: "Royal Blue Premium Watch",
    description:
      "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch",
    price: 50,
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
  {
    id: 64,
    title: "Leather Strap Skeleton Watch",
    description:
      "Leather Strap Skeleton Watch for Men - Stylish and Latest Design",
    price: 46,
    discountPercentage: 10.2,
    rating: 4.98,
    stock: 61,
    brand: "Strap Skeleton",
    category: "mens-watches",
    thumbnail: "https://i.dummyjson.com/data/products/64/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/64/1.jpg",
      "https://i.dummyjson.com/data/products/64/2.webp",
      "https://i.dummyjson.com/data/products/64/3.jpg",
      "https://i.dummyjson.com/data/products/64/thumbnail.jpg",
    ],
  },
  {
    id: 65,
    title: "Stainless Steel Wrist Watch",
    description:
      "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
    price: 47,
    discountPercentage: 17.79,
    rating: 4.79,
    stock: 94,
    brand: "Stainless",
    category: "mens-watches",
    thumbnail: "https://i.dummyjson.com/data/products/65/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/65/1.jpg",
      "https://i.dummyjson.com/data/products/65/2.webp",
      "https://i.dummyjson.com/data/products/65/3.jpg",
      "https://i.dummyjson.com/data/products/65/4.webp",
      "https://i.dummyjson.com/data/products/65/thumbnail.webp",
    ],
  },
  {
    id: 66,
    title: "Steel Analog Couple Watches",
    description: "Elegant design, Stylish ,Unique & Trendy,Comfortable wear",
    price: 35,
    discountPercentage: 3.23,
    rating: 4.79,
    stock: 24,
    brand: "Eastern Watches",
    category: "womens-watches",
    thumbnail: "https://i.dummyjson.com/data/products/66/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/66/1.jpg",
      "https://i.dummyjson.com/data/products/66/2.jpg",
      "https://i.dummyjson.com/data/products/66/3.jpg",
      "https://i.dummyjson.com/data/products/66/4.JPG",
      "https://i.dummyjson.com/data/products/66/thumbnail.jpg",
    ],
  },
  {
    id: 67,
    title: "Fashion Magnetic Wrist Watch",
    description:
      "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
    price: 60,
    discountPercentage: 16.69,
    rating: 4.03,
    stock: 46,
    brand: "Eastern Watches",
    category: "womens-watches",
    thumbnail: "https://i.dummyjson.com/data/products/67/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/67/1.jpg",
      "https://i.dummyjson.com/data/products/67/2.jpg",
      "https://i.dummyjson.com/data/products/67/3.jpg",
      "https://i.dummyjson.com/data/products/67/4.jpg",
      "https://i.dummyjson.com/data/products/67/thumbnail.jpg",
    ],
  },
  {
    id: 68,
    title: "Stylish Luxury Digital Watch",
    description:
      "Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls",
    price: 57,
    discountPercentage: 9.03,
    rating: 4.55,
    stock: 77,
    brand: "Luxury Digital",
    category: "womens-watches",
    thumbnail: "https://i.dummyjson.com/data/products/68/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/68/1.jpg",
      "https://i.dummyjson.com/data/products/68/2.jpg",
    ],
  },
  {
    id: 69,
    title: "Golden Watch Pearls Bracelet Watch",
    description:
      "Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women",
    price: 47,
    discountPercentage: 17.55,
    rating: 4.77,
    stock: 89,
    brand: "Watch Pearls",
    category: "womens-watches",
    thumbnail: "https://i.dummyjson.com/data/products/69/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/69/1.jpg",
      "https://i.dummyjson.com/data/products/69/2.jpg",
      "https://i.dummyjson.com/data/products/69/3.webp",
      "https://i.dummyjson.com/data/products/69/4.jpg",
      "https://i.dummyjson.com/data/products/69/thumbnail.jpg",
    ],
  },
  {
    id: 70,
    title: "Stainless Steel Women",
    description:
      "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies",
    price: 35,
    discountPercentage: 8.98,
    rating: 4.08,
    stock: 111,
    brand: "Bracelet",
    category: "womens-watches",
    thumbnail: "https://i.dummyjson.com/data/products/70/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/70/1.jpg",
      "https://i.dummyjson.com/data/products/70/2.jpg",
      "https://i.dummyjson.com/data/products/70/thumbnail.jpg",
    ],
  },
];

function ShopController() {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [productList, setProductList] = useState([]);
  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("none");

  /**
   * 1- Clothes
   * 2- Electronics
   * 3- Furniture
   * 4- Shoes
   *[
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
]
  
   */
  // https://api.escuelajs.co/api/v1/products/?categoryId=2
  useEffect(() => {
    const fetchData = async () => {
      // https://dummyjson.com/products
      const res = await fetch("");
      const data = await res.json();

      console.log("Get Data !");

      setProductList(AllProducts);

      console.log("Product List", data);
      // data.products.forEach((product) => {
      //   console.log(product);
      // });
      return data;
    };

    // fetchData();
    setProductList(AllProducts);
  }, []);

  const showFilterHandler = () => {
    setShowFilterBar((prev) => !prev);
  };

  productList.forEach((item) => {
    console.log("Product List", item.brand);
  });

  // Filter
  const filteredProduct = productList.filter((product) => {
    if (filterItem === "smartphones") {
      return product.category === "smartphones";
    } else if (filterItem === "laptops") {
      return product.category === "laptops";
    } else if (filterItem === "watches") {
      return (
        product.category === "mens-watches" ||
        product.category === "womens-watches"
      );
    }
    // return all products
    return product;
  });

  // sorting

  const sortedProduct =
    sortItem === "low"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filteredProduct;

  return (
    <div className={classes["product-controller"]}>
      <div className={classes.content}>
        <div className={classes["top"]}>
          <TopBar
            productsLength={sortedProduct.length}
            filterItem={filterItem}
            changeFilterState={showFilterHandler}
            setSortItem={setSortItem}
          />
        </div>
        <div className={classes["down"]}>
          <FilterBar
            setFilterItem={setFilterItem}
            showFilter={showFilterBar}
            changeFilterState={showFilterHandler}
          />
          <div className={classes["products"]}>
            <ProductList productList={sortedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopController;
