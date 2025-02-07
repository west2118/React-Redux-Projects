import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import CreateBlog from "./pages/CreateBlog";
import Favorites from "./pages/Favorites";
import EditBlog from "./pages/EditBlog";
import Description from "./pages/Description";
import { useDispatch, useSelector } from "react-redux";
import { replaceBlog } from "./store/blogSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/create-blog", element: <CreateBlog /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/edit-blog", element: <EditBlog /> },
      { path: "/blog-details/:blogId", element: <Description /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    const sendRequestData = async () => {
      const response = await fetch(
        "https://task-e2412-default-rtdb.firebaseio.com/blog.json",
        {
          method: "PUT",
          body: JSON.stringify(blog),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed!");
      }
    };

    sendRequestData();
  }, [blog]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://task-e2412-default-rtdb.firebaseio.com/blog.json"
      );
      const data = await response.json();

      const loadedBlogs = data || [];

      dispatch(replaceBlog(loadedBlogs));
    };

    fetchData();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
