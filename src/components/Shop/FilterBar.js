import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./FilterBar.module.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function FilterBar(props) {
  const showFilter = props.showFilter;
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRates, setSelectedRate] = useState([]);
  const [brandItems, setBrandItems] = useState([]);
  const navigate = useNavigate();

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
    setSelectedBrands([]);
    setSelectedRate([]);
    clearQueryValue();
    const item = event.target.value;
    props.setFilterItem(item);

    if (window.screen.width <= 768) {
      props.changeFilterState();
    }
  };

  const clearQueryValue = () => {
    props.setSearchValue("");
    navigate("/shop", { search: "" });
  };

  const selectedBrandsHandler = (e) => {
    const brand = e.target.value;
    console.log(brand);
    // if (window.screen.width <= 768) {
    //   props.changeFilterState();
    // }

    setSelectedBrands((selectedBrands) => {
      if (e.target.checked) {
        return [...selectedBrands, brand];
      } else {
        return selectedBrands.filter((item) => item !== brand);
      }
    });
  };

  const selectedRatesHandler = (e) => {
    const rate = e.target.value;
    console.log(rate);
    // if (window.screen.width <= 768) {
    //   props.changeFilterState();
    // }
    setSelectedRate((selectedRates) => {
      if (e.target.checked) {
        return [...selectedRates, parseInt(rate)];
      } else {
        return selectedRates.filter((item) => item !== parseInt(rate));
      }
    });
  };

  useEffect(() => {
    props.filteredProducts(selectedBrands);
  }, [selectedBrands]);

  useEffect(() => {
    props.filterRateProducts(selectedRates);
  }, [selectedRates]);

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
              id="smartphones"
              name="category"
              value="smartphones"
            />
            <label htmlFor="smartphones">Smart Phones</label>
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
          {Array.from({ length: 5 }).map((item, index) => {
            const rate = 5 - index;
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={rate}
                  name="rating"
                  value={rate}
                  onChange={selectedRatesHandler}
                  checked={selectedRates.includes(rate)}
                />
                {Array.from({ length: rate }).map((_, index) => {
                  return (
                    <label key={index} htmlFor={rate}>
                      <AiFillStar />
                    </label>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
