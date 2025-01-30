import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-auto py-6 px-14 bg-slate-700 text-white flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Profile Manager</h1>
      <ul className="flex items-center gap-8">
        <Link to="/" className="text-lg">
          Home
        </Link>
        <Link to="/Create-User" className="text-lg">
          Create
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
