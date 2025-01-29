import React from "react";
import Ingredients from "../components/Ingredients";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Description = () => {
  const recipes = useSelector((state) => state.recipeList.recipesList);
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const ingredientsArray = recipe.ingredients
    .split(",")
    .map((item) => item.trim());

  console.log(ingredientsArray);

  return (
    <div className="w-full h-auto flex justify-center items-center flex-col">
      <div className="max-w-7xl">
        <div className="mt-16 mb-14 w-full flex justify-center items-center flex-col gap-4">
          <h1 className="text-3xl font-semibold text-slate-800">
            {recipe.name}
          </h1>
          <ul className="flex gap-4">
            <li className="text-sm">
              <span className="text-lg font-semibold text-slate-800">
                {recipe.minutes}
              </span>{" "}
              Minutes
            </li>
            <li>|</li>
            <li className="text-sm">
              <span className="text-lg font-semibold text-slate-800">
                {recipe.nutrition}
              </span>
              <span className="text-lg font-semibold text-slate-800">g </span>
              Nutritions
            </li>
          </ul>
        </div>

        <div className="w-full px-20 pb-10 flex justify-center flex-col">
          <img src={recipe.img} alt="" className="w-full h-96 object-cover" />
          <p className="mt-5 italic">{recipe.description}</p>
          <div className="my-4">
            <h1 className="text-md">
              <span className="text-2xl font-semibold mr-1.5">
                {recipe.servings}
              </span>
              Servings
            </h1>
          </div>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-14 list-disc pl-8 p-4 border border-black">
            {ingredientsArray.map((ingredient) => (
              <Ingredients ingredient={ingredient} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
