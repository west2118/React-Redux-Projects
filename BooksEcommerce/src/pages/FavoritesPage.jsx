import React from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const book = useSelector((state) => state.book.books);

  const bookFavorite = book.filter((item) => item.favorite === true);

  return (
    <div className="font-[sans-serif] h-auto">
      <div className="px-4 py-10 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-6">
          Favorites
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {bookFavorite.length >= 1 ? (
            bookFavorite.map((books) => (
              <ProductItem key={books.id} books={books} />
            ))
          ) : (
            <h1 className="font-semibold text-xl text-red-600">
              No favorite book available yet!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
