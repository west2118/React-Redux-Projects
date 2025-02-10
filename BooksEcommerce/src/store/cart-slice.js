import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    subtotal: 0,
  },
  reducers: {
    replaceCart(state, action) {
      return action.payload;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.subtotal = state.subtotal + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          description: newItem.description,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.subtotal = state.subtotal - existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeAllItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.subtotal = state.subtotal - existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    checkoutCart(state, action) {
      state.items = [];
      state.totalQuantity = 0;
      state.subtotal = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemToCart,
  removeAllItemToCart,
  checkoutCart,
  replaceCart,
} = cartSlice.actions;

export default cartSlice.reducer;
