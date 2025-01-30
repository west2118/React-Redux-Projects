import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../slice/profileSlice";

const store = configureStore({
  reducer: {
    userManagement: profileReducer,
  },
});

export default store;
