import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import CreateRecipe from "./pages/CreateRecipe";
import Favorites from "./pages/Favorites";
import SignIn from "./pages/SignIn";
import Description from "./pages/Description";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/create",
        element: <CreateRecipe />,
      },
      { path: "/favorites", element: <Favorites /> },
      { path: "/authentication", element: <SignIn /> },
      { path: "/recipe/:recipeId", element: <Description /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
