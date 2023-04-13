import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    add(state, action) {
      console.log("welcome add");
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        // item not in the cart
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });

        state.totalAmount += newItem.price;
      } else {
        window.alert("This Item In Your Cart");
      }
    },
    increment(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.quantity++;

      state.totalAmount += existingItem.price;

      existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
    },
    decrement(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalAmount -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    delete(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalAmount -= existingItem.totalPrice;
    },
    clear(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
