import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-600 text-white py-6 px-10 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Blog App</h1>
      <ul className="flex gap-4">
        <Link
          to="/"
          className="py-1.5 px-4 rounded-md bg-red-700 hover:bg-red-800 shadow-xl">
          Home
        </Link>
        <Link
          to="/create-blog"
          className="py-1.5 px-4 rounded-md bg-red-700 hover:bg-red-800 shadow-xl">
          New Blog
        </Link>
        <Link
          to="/favorites"
          className="py-1.5 px-4 rounded-md bg-red-700 hover:bg-red-800 shadow-xl">
          Favorites
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
