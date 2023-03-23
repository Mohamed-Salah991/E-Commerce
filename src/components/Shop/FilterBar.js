import React from "react";
import classes from "./FilterBar.module.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
function FilterBar(props) {
  const showFilter = props.showFilter;
  const filterHandler = (item) => {
    console.log("Item ", item);
    props.setFilterItem(item);
  };

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
            />
            <label
              onClick={() => {
                filterHandler("all");
              }}
              htmlFor="all"
            >
              All
            </label>
          </div>
          <div>
            <input type="radio" id="mobiles" name="category" value="mobiles" />
            <label
              onClick={() => {
                filterHandler("smartphones");
              }}
              htmlFor="mobiles"
            >
              Mobiles
            </label>
          </div>
          <div>
            <input type="radio" id="laptops" name="category" value="laptops" />
            <label
              onClick={() => {
                filterHandler("laptops");
              }}
              htmlFor="laptops"
            >
              Laptops
            </label>
          </div>
        </div>
      </div>
      <div className={classes["price-range"]}>
        <h3>Price Range</h3>
        <div className={classes["price-progress"]}>
          <span>*****************</span>
        </div>
      </div>
      <div className={classes.brand}>
        <h3>Brand</h3>
        <div className={classes["list"]}>
          <div>
            <input type="checkbox" id="Apple" name="brand" value="Apple" />
            <label htmlFor="Apple">Apple</label>
          </div>
          <div>
            <input type="checkbox" id="Samsung" name="brand" value="Samsung" />
            <label htmlFor="Samsung">Samsung</label>
          </div>
          <div>
            <input type="checkbox" id="Huawei" name="brand" value="Huawei" />
            <label htmlFor="Huawei">Huawei</label>
          </div>
          <div>
            <input type="checkbox" id="Infinix" name="brand" value="Infinix" />
            <label htmlFor="Infinix">Infinix</label>
          </div>
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
