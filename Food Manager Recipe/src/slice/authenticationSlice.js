import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticate: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state) => {
      state.authenticate = true;
    },
    logout: (state) => {
      state.authenticate = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
