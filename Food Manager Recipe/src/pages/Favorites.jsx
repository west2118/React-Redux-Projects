import React from "react";
import FoodItem from "../components/FoodItem";
import { useSelector } from "react-redux";

const Favorites = () => {
  const recipes = useSelector((state) => state.recipeList.recipesList);

  const favorites = recipes.filter((recipe) => recipe.favorite === true);

  return (
    <div className="py-10 px-20">
      <h1 className="text-3xl font-semibold mb-5">Favorites</h1>
      <div className="grid-container">
        {favorites.map((recipes) => (
          <FoodItem key={recipes.id} recipe={recipes} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
