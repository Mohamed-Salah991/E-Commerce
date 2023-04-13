import { createSlice } from "@reduxjs/toolkit";

const initialWishListState = {
  items: [],
};

const WhishListSlice = createSlice({
  name: "whish-list",
  initialState: initialWishListState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        // item not in the cart
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
        });
      } else {
        window.alert("This Item In Your Cart");
      }
    },
    delete(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clear(state) {
      state.items = [];
    },
  },
});

export const wishListActions = WhishListSlice.actions;

export default WhishListSlice.reducer;
