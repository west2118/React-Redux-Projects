import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../slice/recipeSlice";

const FoodItem = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(recipe.id));
  };

  return (
    <div className="p-4 shadow-2xl rounded-md max-w-xl">
      <img
        src={recipe.img}
        alt=""
        className="w-full h-44 object-cover rounded-md"
      />
      <div className="flex justify-between items-center my-4 h-16">
        <h1 className="font-semibold text-xl">{recipe.name}</h1>
        <button
          onClick={handleFavoriteToggle}
          className="py-1.5 px-5 bg-red-600 rounded-md text-white">
          {recipe.favorite ? "Saved" : "Save"}
        </button>
      </div>
      <p>{recipe.description}</p>
      <h1 className="mt-4 font-semibold">
        Cooking Time: <span>{recipe.minutes}</span> minutes
      </h1>
      <Link
        to={`/recipe/${recipe.id}`}
        className="w-full flex items-center justify-center bg-blue-600 mt-4 py-2 text-base text-white rounded-md">
        View Details
      </Link>
    </div>
  );
};

export default FoodItem;
