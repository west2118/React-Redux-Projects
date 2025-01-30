import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      contact: "+1234567890",
      role: "Admin",
      type: "No",
    },
  ],
  searchList: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.userList.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, newUserInfo } = action.payload;
      const newUserUpdate = state.userList.findIndex((user) => user.id === id);
      if (newUserUpdate !== -1) {
        state.userList[newUserUpdate] = {
          ...state.userList[newUserUpdate],
          ...newUserInfo,
        };
      }
    },
    deleteUser: (state, action) => {
      state.userList = state.userList.filter(
        (state) => state.id !== action.payload
      );
    },
    searchUserList: (state, action) => {
      if (action.payload) {
        state.searchList = state.userList.filter((user) =>
          user.lastName.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.searchList = [...state.userList];
      }
    },
  },
});

export const { createUser, editUser, deleteUser, searchUserList } =
  profileSlice.actions;
export default profileSlice.reducer;
