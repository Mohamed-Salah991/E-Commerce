import React, { useState, useEffect } from "react";
import classes from "./Controller.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import TopBar from "./TopBar";
import { AllProducts } from "../../dev-data/AllProducts";

function ShopController() {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("none");
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [sortedProduct, setSortedProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRates, setSelectedRate] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [, setReload] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchQuery) {
      setSearchValue(searchQuery);
      // navigate("/shop", { search: "" });
    }
  }, [searchQuery, navigate]);

  const showFilterHandler = () => {
    setShowFilterBar((prev) => !prev);
  };

  // Filter
  useEffect(() => {
    // Category
    let filteredProduct = AllProducts.filter((product) => {
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

    // Brand
    let filteredBrandProduct = [];
    if (selectedBrands.length > 0) {
      filteredBrandProduct = filteredProduct.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    } else {
      filteredBrandProduct = filteredProduct;
    }

    // Rate
    let filterRateProduct = [];
    if (selectedRates.length > 0) {
      filterRateProduct = filteredBrandProduct.filter((product) =>
        selectedRates.includes(parseInt(product.rating))
      );
    } else {
      filterRateProduct = filteredBrandProduct;
    }

    // Search Value
    let searchValueFilter = [];
    if (searchValue) {
      setFilterItem(searchValue);
      searchValueFilter = filterRateProduct.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    } else {
      searchValueFilter = filterRateProduct;
    }

    setFilteredProducts(searchValueFilter);
  }, [filterItem, selectedBrands, selectedRates, searchValue]);

  // Sorting
  useEffect(() => {
    let sortedProduct = [];
    if (sortItem === "low") {
      sortedProduct = filteredProduct.sort((a, b) => a.price - b.price);
    } else if (sortItem === "high") {
      sortedProduct = filteredProduct.sort((a, b) => b.price - a.price);
    } else {
      sortedProduct = filteredProduct.sort((a, b) => a.id - b.id);
    }

    setSortedProducts(sortedProduct);
    setReload((e) => !e);
  }, [sortItem, setSortItem, filteredProduct, setFilteredProducts]);

  // Filter Brand Handler
  function filteredBrandsHandler(selectedBrands) {
    setSelectedBrands(selectedBrands);
  }

  // Filter Rate Handler
  function filterRateHandler(selectedRates) {
    setSelectedRate(selectedRates);
  }

  return (
    <div className={classes["product-controller"]}>
      <div className={classes.content}>
        <div className={classes["top"]}>
          <TopBar
            setGridView={setGridView}
            gridView={gridView}
            filterItem={filterItem}
            changeFilterState={showFilterHandler}
            setSortItem={setSortItem}
            productsFoundLength={filteredProduct.length}
          />
        </div>
        <div className={classes["down"]}>
          <FilterBar
            productsList={AllProducts}
            setFilterItem={setFilterItem}
            filterItem={filterItem}
            filteredProduct={filteredProduct}
            showFilter={showFilterBar}
            changeFilterState={showFilterHandler}
            filteredProducts={filteredBrandsHandler}
            filterRateProducts={filterRateHandler}
            setSearchValue={setSearchValue}
          />
          <div className={classes["products"]}>
            <ProductList gridView={gridView} productList={sortedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopController;
