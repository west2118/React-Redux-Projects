import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-auto flex justify-center items-center mt-10 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
