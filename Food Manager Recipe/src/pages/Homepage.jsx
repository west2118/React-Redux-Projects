import React, { useEffect, useState } from "react";
import SearchRecipe from "../components/SearchRecipe";
import FoodItem from "../components/FoodItem";
import { useDispatch, useSelector } from "react-redux";
import { filterRecipe } from "../slice/recipeSlice";

const Homepage = () => {
  const filteredRecipes = useSelector(
    (state) => state.recipeList.filteredRecipesList
  );
  const recipes = useSelector((state) => state.recipeList.recipesList);

  const dispatch = useDispatch();
  const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);
  const [search, setSearch] = useState("");

  const filterRecipeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);

    dispatch(filterRecipe(value));
  };

  useEffect(() => {
    if (search.length > 0) {
      setRecipesToDisplay(filteredRecipes);
    } else {
      setRecipesToDisplay(recipes);
    }
  }, [search, filteredRecipes, recipes]);

  return (
    <div className="w-full h-auto py-10 px-20 flex-col">
      <SearchRecipe filterRecipeHandler={filterRecipeHandler} search={search} />
      <div className="grid-container">
        {recipesToDisplay.map((recipe) => (
          <FoodItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
