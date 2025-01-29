import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../slice/authenticationSlice";

const Navbar = () => {
  const disptach = useDispatch();

  const authenticate = useSelector(
    (state) => state.authentication.authenticate
  );

  return (
    <div className="w-full h-auto p-6 bg-slate-800 text-white flex justify-between items-center">
      <h1 className="text-xl font-semibold">Recipe App</h1>
      <ul className="flex gap-8">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          {authenticate !== true ? (
            <NavLink to="/authentication">Sign In</NavLink>
          ) : (
            <button onClick={() => disptach(logout())}>Logout</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
