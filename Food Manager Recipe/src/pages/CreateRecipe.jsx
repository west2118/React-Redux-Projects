import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addRecipe } from "../slice/recipeSlice";

const CreateRecipe = () => {
  const recipes = useSelector((state) => state.recipeList.recipesList);
  const authenticate = useSelector(
    (state) => state.authentication.authenticate
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    minutes: "",
    nutrition: "",
    description: "",
    servings: "",
    ingredients: "",
    img: "",
    favorite: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      ...formData,
      id: recipes.length + 1,
    };

    dispatch(addRecipe(newRecipe));

    setFormData({
      category: "",
      name: "",
      minutes: "",
      nutrition: "",
      description: "",
      servings: "",
      ingredients: "",
      img: "",
      favorite: false,
    });

    navigate("/");
  };

  return (
    <div className="w-full h-auto flex justify-center items-center flex-col my-16">
      {authenticate && (
        <form
          onSubmit={handleSubmit}
          className="w-2/3 flex flex-col border-4 border-slate-700 p-5 shadow-xl">
          <label htmlFor="name" className="text-lg font-semibold mb-1.5">
            Food Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-black p-2 mb-4"
            required
          />

          <label htmlFor="category" className="text-lg font-semibold mb-1.5">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-black p-2 mb-4"
            required
          />

          <label htmlFor="img" className="text-lg font-semibold mb-1.5">
            Food Image
          </label>
          <input
            type="text"
            name="img"
            id="img"
            value={formData.img}
            onChange={handleChange}
            className="border border-black p-2 mb-4"
            required
          />

          <label htmlFor="description" className="text-lg font-semibold mb-1.5">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-black p-2 mb-4"
            rows="4"
            required></textarea>

          <label htmlFor="servings" className="text-lg font-semibold mb-1.5">
            Servings
          </label>
          <input
            type="number"
            name="servings"
            id="servings"
            value={formData.servings}
            onChange={handleChange}
            className="border border-black p-2 mb-4"
            required
          />

          <label htmlFor="ingredients" className="text-lg font-semibold mb-1.5">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="border border-black p-2 mb-4"
            rows="4"
            required></textarea>

          <label htmlFor="nutrition" className="text-lg font-semibold mb-1.5">
            Food Nutrition
          </label>
          <input
            type="text"
            name="nutrition"
            id="nutrition"
            value={formData.nutrition}
            onChange={handleChange}
            className="border border-black p-2 mb-4"
            required
          />

          <label htmlFor="minutes" className="text-lg font-semibold mb-1.5">
            Minutes to Cook
          </label>
          <input
            type="number"
            name="minutes"
            id="minutes"
            value={formData.minutes}
            onChange={handleChange}
            className="border border-black p-2 mb-4"
            required
          />
          <button className="mt-3 shadow-xl bg-slate-700 py-2.5 text-white text-lg">
            Submit
          </button>
        </form>
      )}
      {!authenticate && (
        <>
          <h1 className="text-2xl font-semibold mb-4">
            You need to sign in first!
          </h1>
          <Link to="/authentication" className="underline text-blue-700">
            Click me for the link
          </Link>
        </>
      )}
    </div>
  );
};

export default CreateRecipe;
