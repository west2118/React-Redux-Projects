import React from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const books = useSelector((state) => state.book.books);

  return (
    <div className="font-[sans-serif] pb-64">
      <div className="px-4 py-10 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        <div className="flex max-w-xs w-full my-6 bg-gray-100 px-4 py-2 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all">
          <input
            type="text"
            placeholder="Search something..."
            className="w-full text-sm bg-transparent rounded outline-none pr-2 text-blue-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="cursor-pointer fill-gray-400">
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {books?.length > 0 &&
            books.map((book) => <ProductItem key={book.id} books={book} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
