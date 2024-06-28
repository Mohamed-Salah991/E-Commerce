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
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        // Item not in the cart, add it
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });

        state.totalAmount = parseFloat(
          (state.totalAmount + newItem.price).toFixed(2)
        );
      } else {
        window.alert("This item is already in your cart.");
      }
    },
    increment(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = parseFloat(
          (existingItem.totalPrice + existingItem.price).toFixed(2)
        );
        state.totalAmount = parseFloat(
          (state.totalAmount + existingItem.price).toFixed(2)
        );
      }
    },
    decrement(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // Remove the item if quantity is 1
          state.items = state.items.filter((item) => item.id !== id);
          state.totalAmount = parseFloat(
            (state.totalAmount - existingItem.price).toFixed(2)
          );
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = parseFloat(
            (existingItem.totalPrice - existingItem.price).toFixed(2)
          );
          state.totalAmount = parseFloat(
            (state.totalAmount - existingItem.price).toFixed(2)
          );
        }
      }
    },
    delete(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount = parseFloat(
          (state.totalAmount - existingItem.totalPrice).toFixed(2)
        );
      }
    },
    clear(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
