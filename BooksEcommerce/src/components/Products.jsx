import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Products = () => {
  const books = useSelector((state) => state.book.books);

  return (
    <div className="font-[sans-serif] ">
      <div className="px-4 py-10 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-6">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {books &&
            books
              .map((book) => <ProductItem key={book.id} books={book} />)
              .slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default Products;
