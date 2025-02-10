import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/cart-slice";

const Details = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  const { id } = useParams();

  const booksDetail = books.find((item) => item.id === Number(id));

  return (
    <div className="font-sans px-4 pb-44 py-10 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
      <div className="grid items-start grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 grid grid-cols-2 gap-0.5">
          <div className="columns-2 gap-0.5 space-y-0.5">
            <div className="overflow-hidden">
              <img
                src={booksDetail.image}
                alt="Product"
                className="w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={booksDetail.image}
                alt="Product"
                className="w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={booksDetail.image}
                alt="Product"
                className="w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={booksDetail.image}
                alt="Product"
                className="w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src={booksDetail.image}
              alt="Product"
              className="w-full aspect-[3/4] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
            />
          </div>
        </div>

        <div className="py-6 px-8 max-lg:max-w-2xl">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {booksDetail.name}
            </h2>
          </div>

          <div className="mt-6">
            <div className="flex items-center flex-wrap gap-4">
              <p className="text-gray-800 text-4xl font-bold">
                ${`${booksDetail.price}`}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <button
              type="button"
              onClick={() => dispatch(addItemToCart(booksDetail))}
              className="w-full px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md">
              Add to cart
            </button>
            <button
              type="button"
              className="w-full px-4 py-2.5 border bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md">
              Buy Now
            </button>
          </div>

          <div className="mt-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Product Description
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                {booksDetail.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
