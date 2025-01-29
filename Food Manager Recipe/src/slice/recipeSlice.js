import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "../recipes";

const initialState = {
  recipesList: recipes,
  filteredRecipesList: [],
};

const recipeSlice = createSlice({
  name: "recipeList",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipeId = action.payload;
      const recipe = state.recipesList.find((r) => r.id === recipeId);
      if (recipe) {
        recipe.favorite = !recipe.favorite;
      }
    },
    addRecipe: (state, action) => {
      state.recipesList.push(action.payload);
    },
    filterRecipe: (state, action) => {
      if (action.payload) {
        state.filteredRecipesList = state.recipesList.filter(
          (recipe) => recipe.category === action.payload
        );
      } else {
        state.filteredRecipesList = [...state.recipesList];
      }
    },
  },
});

export const { toggleFavorite, addRecipe, filterRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
