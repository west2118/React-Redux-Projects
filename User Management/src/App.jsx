import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage";
import CreatePage from "./routes/CreatePage";
import ViewUser from "./routes/ViewUser";
import EditPage from "./routes/EditPage";
import Layout from "./routes/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/Create-User", element: <CreatePage /> },
      { path: "/Edit-User/:userId", element: <EditPage /> },
      { path: "/View-User/:userId", element: <ViewUser /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
