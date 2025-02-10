import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      {
        id: 1,
        name: "Atomic Habits",
        price: 20,
        description:
          "A guide to building good habits, breaking bad ones, and mastering small behaviors that lead to success.",
        image:
          "https://creatoom.com/wp-content/uploads/2022/07/hard-cover-book-mockups-by-the-wall-isometric.jpg",
        favorite: false,
      },
      {
        id: 2,
        name: "The Alchemist",
        price: 15,
        description:
          "A philosophical novel about following one's dreams and listening to the heart's desires.",
        image:
          "https://creatoom.com/wp-content/uploads/2022/07/open-hard-cover-book-mockup-isometric.jpg",
        favorite: false,
      },
      {
        id: 3,
        name: "Sapiens: A Brief History of Humankind",
        price: 25,
        description:
          "An exploration of the history and impact of Homo sapiens on the world.",
        image:
          "https://mockups-design.com/wp-content/uploads/2023/02/Free_Book_Mockup_1-scaled.jpg",
        favorite: false,
      },
      {
        id: 4,
        name: "The Psychology of Money",
        price: 18,
        description:
          "Timeless lessons on wealth, greed, and personal finance psychology.",
        image:
          "https://static.petersofkensington.com.au/images/ProductImages/566390-01-Zoom.jpg",
        favorite: false,
      },
      {
        id: 5,
        name: "1984",
        price: 12,
        description:
          "A dystopian novel depicting a totalitarian regime and the consequences of extreme surveillance.",
        image:
          "https://static.vecteezy.com/system/resources/previews/022/159/463/non_2x/book-cover-abstract-minimalist-art-soft-cover-book-design-poster-design-vector.jpg",
        favorite: false,
      },
      {
        id: 6,
        name: "Rich Dad Poor Dad",
        price: 22,
        description:
          "A personal finance book that contrasts two different approaches to money and wealth-building.",
        image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg",
        favorite: false,
      },
      {
        id: 7,
        name: "The Subtle Art of Not Giving a F*ck",
        price: 17,
        description:
          "A counterintuitive approach to living a good life by focusing on what truly matters.",
        image:
          "https://bookofmormoncentral.org/sites/default/files/pictures/page-images/blog-entry/2022/yale-the-book-of-mormon-the-earliest-text-second-edition-royal-skousen-header-image.jpg",
        favorite: false,
      },
      {
        id: 8,
        name: "Harry Potter and the Sorcerer’s Stone",
        price: 30,
        description:
          "The first book in the magical series about a young wizard’s adventures.",
        image:
          "https://creatoom.com/wp-content/uploads/2022/07/hard-cover-book-mockups-by-the-wall-isometric.jpg",
        favorite: false,
      },
    ],
  },
  reducers: {
    replaceBook(state, action) {
      state.books = action.payload;
    },
    addFavorite(state, action) {
      const id = action.payload;
      const isFavorite = state.books.find((item) => item.id === id);

      if (isFavorite) {
        isFavorite.favorite = !isFavorite.favorite;
      }
    },
  },
});

export const { addFavorite, replaceBook } = uiSlice.actions;

export default uiSlice.reducer;
