import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import wishListReducer from "./Whish-List";

const store = configureStore({
  reducer: { cart: cartReducer, wishList: wishListReducer },
});

export default store;
