import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cart-slice";
import uiReducer from "../store/ui-slice";

const store = configureStore({
  reducer: { cart: cartReducer, book: uiReducer },
});

export default store;
