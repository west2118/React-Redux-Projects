import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../slice/authenticationSlice";
import recipeReducer from "../slice/recipeSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    recipeList: recipeReducer,
  },
});

export default store;
