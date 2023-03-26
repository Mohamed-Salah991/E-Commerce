import React, { useState } from "react";
import classes from "./Search.module.css";

import { AllProducts } from "../../components/Shop/ShopController";

function Search() {
  const [filteredData, setFilteredData] = useState([]);

  const handleChangeFilter = (event) => {
    const value = event.target.value;
    const newFilter = AllProducts.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });

    if (value === "") setFilteredData([]);
    else setFilteredData(newFilter);
  };

  return (
    <div className={classes.search}>
      <div className={classes["search-input"]}>
        <input
          onChange={handleChangeFilter}
          className={classes.input}
          type="search"
          placeholder="Search For Product..."
          id="header-search"
        />
        {filteredData.length !== 0 && (
          <div className={classes["search-result"]}>
            <ul>
              {filteredData.map((item) => {
                return (
                  <li>
                    <div>
                      <img src={item.images[0]} alt="" />
                      <a href="/">{item.title}</a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button className={classes.button}>Search</button>
      </div>
    </div>
  );
}

export default Search;
