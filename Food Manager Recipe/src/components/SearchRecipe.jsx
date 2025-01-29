import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterRecipe } from "../slice/recipeSlice";

const SearchRecipe = ({ filterRecipeHandler, search }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mb-10 w-full flex justify-center items-center gap-4">
        <input
          type="text"
          onChange={(e) => filterRecipeHandler(e)}
          value={search}
          className="border-b border-b-black py-1 px-2 focus:outline-none w-2/5"
        />
        <button
          onClick={() => dispatch(filterRecipe(search))}
          className="py-1.5 px-5 bg-blue-600 text-white">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchRecipe;
