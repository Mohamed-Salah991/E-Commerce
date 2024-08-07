import React, { useState } from "react";
import classes from "./Search.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AllProducts } from "../../dev-data/AllProducts";

function Search() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const showProductDetailsHandler = () => {
    setFilteredData([]);
    // setSearchValue("");
  };

  const handleChangeFilter = (event) => {
    const value = event.target.value;
    setSearchValue(event.target.value);
    const newFilter = AllProducts.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });

    if (value === "") setFilteredData([]);
    else setFilteredData(newFilter);
  };

  const searchBtnHandler = () => {
    navigate({
      pathname: "/shop",
      search: `?query=${searchValue}`,
    });
    setFilteredData([]);
  };

  const enterButtonHandler = (event) => {
    if (event.key === "Enter") {
      searchBtnHandler();
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes["search-input"]}>
        <input
          value={searchValue}
          onKeyDown={enterButtonHandler}
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
                  <li key={item.id}>
                    <div>
                      <Link
                        onClick={showProductDetailsHandler}
                        to={`/${item.id}`}
                      >
                        <img src={item.images[0]} alt="" />
                      </Link>
                      <Link
                        className={classes.title}
                        onClick={showProductDetailsHandler}
                        to={`/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button onClick={searchBtnHandler} className={classes.button}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
