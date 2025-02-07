import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    replaceBlog: (state, action) => {
      state.blogs = action.payload;
    },
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    favoriteBlog: (state, action) => {
      const blog = state.blogs.find((blog) => blog.id === action.payload);
      if (blog) {
        blog.favorite = !blog.favorite;
      }
    },
  },
});

export const { addBlog, deleteBlog, favoriteBlog, replaceBlog } =
  blogSlice.actions;

export default blogSlice.reducer;
