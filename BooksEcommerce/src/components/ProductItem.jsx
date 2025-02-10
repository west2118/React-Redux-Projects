import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cart-slice";
import { Link } from "react-router-dom";
import { addFavorite } from "../store/ui-slice";

const ProductItem = ({ books }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-50 rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
      <div className="mb-4 bg-gray-100 rounded p-2">
        <img
          src={books.image}
          alt="Product 3"
          className="aspect-[33/35] w-full object-contain"
        />
      </div>

      <div>
        <div className="flex gap-2">
          <h5 className="h-11 text-base font-bold text-gray-800">
            {books.name}
          </h5>
          <h6 className="text-base text-gray-800 font-bold ml-auto">
            ${books.price}
          </h6>
        </div>
        <p className="text-gray-500 text-[13px] mt-2">
          {books.description.slice(0, 71)}
          {books.description.length > 71 ? "..." : ""}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => dispatch(addFavorite(books.id))}
            className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
            title="Wishlist">
            {books.favorite !== true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                viewBox="0 0 64 64">
                <path
                  fill="red"
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="red">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => dispatch(addItemToCart(books))}
            className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">
            Add to cart
          </button>
        </div>
        <Link
          to={`/products/${books.id}`}
          type="button"
          className="flex items-center justify-center text-sm px-2 h-9 font-semibold w-full mt-2 bg-green-600 hover:bg-green-700 text-white tracking-wide ml-auto outline-none border-none rounded">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
