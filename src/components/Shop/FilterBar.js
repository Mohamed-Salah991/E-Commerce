import React, { useEffect, useState } from "react";
import classes from "./FilterBar.module.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function FilterBar(props) {
  const showFilter = props.showFilter;
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandItems, setBrandItems] = useState([]);

  useEffect(() => {
    console.log(props.filterItem);

    let filteredProduct = props.productsList.filter((product) => {
      if (props.filterItem === "smartphones") {
        return product.category === "smartphones";
      } else if (props.filterItem === "laptops") {
        return product.category === "laptops";
      } else if (props.filterItem === "watches") {
        return (
          product.category === "mens-watches" ||
          product.category === "womens-watches"
        );
      }
      // return all products
      return product;
    });
    let brandItems = filteredProduct.map((item) => {
      return item.brand;
    });

    brandItems = [...new Set(brandItems)];
    setBrandItems(brandItems);
  }, [props.productsList, props.filterItem]);

  const filterHandler = (event) => {
    clearSelectedBrandsHandler();
    const item = event.target.value;
    props.setFilterItem(item);
    if (window.screen.width <= 768) {
      props.changeFilterState();
    }
  };

  const clearSelectedBrandsHandler = () => {
    setSelectedBrands([]);
  };

  const selectedBrandsHandler = (e) => {
    const brand = e.target.value;
    console.log(brand);
    setSelectedBrands((selectedBrands) => {
      if (e.target.checked) {
        return [...selectedBrands, brand];
      } else {
        return selectedBrands.filter((item) => item !== brand);
      }
    });
  };

  useEffect(() => {
    props.filteredProducts(selectedBrands);
  }, [selectedBrands]);

  return (
    <div className={`${classes["filter-bar"]} ${showFilter && classes.active}`}>
      <div onClick={props.changeFilterState} className={classes["close-icon"]}>
        <AiOutlineClose />
      </div>
      <div className={classes.categories}>
        <h3>Categories</h3>
        <div className={classes["list"]}>
          <div>
            <input
              type="radio"
              id="all"
              name="category"
              value="all"
              defaultChecked
              onClick={filterHandler}
            />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input
              onClick={filterHandler}
              type="radio"
              id="mobiles"
              name="category"
              value="smartphones"
            />
            <label htmlFor="mobiles">Mobiles</label>
          </div>
          <div>
            <input
              onClick={filterHandler}
              type="radio"
              id="laptops"
              name="category"
              value="laptops"
            />
            <label htmlFor="laptops">Laptops</label>
          </div>
          <div>
            <input
              onClick={filterHandler}
              type="radio"
              id="watches"
              name="category"
              value="watches"
            />
            <label htmlFor="watches">Watches</label>
          </div>
        </div>
      </div>
      <div className={classes.brand}>
        <h3>Brand</h3>
        <div className={classes["list"]}>
          {brandItems.map((item) => {
            return (
              <div key={item}>
                <input
                  onChange={selectedBrandsHandler}
                  checked={selectedBrands.includes(item)}
                  type="checkbox"
                  id={item}
                  name="brand"
                  value={item}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.rating}>
        <h3>Rating</h3>
        <div className={classes["list"]}>
          <div>
            <input type="checkbox" id="rate-5" name="rating" value="rate-5" />
            <label htmlFor="rate-5">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </label>
          </div>
          <div>
            <input type="checkbox" id="rate-4" name="rating" value="rate-4" />
            <label htmlFor="rate-4">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </label>
          </div>
          <div>
            <input type="checkbox" id="rate-3" name="rating" value="rate-3" />
            <label htmlFor="rate-3">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </label>
          </div>
          <div>
            <input type="checkbox" id="rate-2" name="rating" value="rate-2" />
            <label htmlFor="rate-2">
              <AiFillStar />
              <AiFillStar />
            </label>
          </div>
          <div>
            <input type="checkbox" id="rate-1" name="rating" value="rate-1" />
            <label htmlFor="rate-1">
              <AiFillStar />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
