import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const shippingFee = 2;
export const taxFee = 4;

const CartPage = () => {
  const booksCart = useSelector((state) => state.cart.items);
  const booksSubtotal = useSelector((state) => state.cart.subtotal);
  const navigate = useNavigate();

  let total = booksSubtotal + shippingFee + taxFee;

  return (
    <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto pt-10 h-auto py-24">
      <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="md:col-span-2 space-y-4">
          {booksCart && booksCart.length >= 1 ? (
            booksCart.map((book) => <CartItem key={book.id} book={book} />)
          ) : (
            <h1 className="font-semibold text-red-600">Add Products Now!!!</h1>
          )}
        </div>

        {booksCart && booksCart.length >= 1 && (
          <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
            <ul className="text-gray-800 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span className="ml-auto font-bold">
                  ${booksSubtotal.toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping{" "}
                <span className="ml-auto font-bold">
                  ${shippingFee.toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax{" "}
                <span className="ml-auto font-bold">${taxFee.toFixed(2)}</span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total <span className="ml-auto">${total.toFixed(2)}</span>
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              <button
                onClick={() => navigate("/checkout")}
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">
                Buy Now
              </button>
              <button
                onClick={() => navigate("/products")}
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">
                Continue Shopping{" "}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <img
                src="https://readymadeui.com/images/master.webp"
                alt="card1"
                className="w-10 object-contain"
              />
              <img
                src="https://readymadeui.com/images/visa.webp"
                alt="card2"
                className="w-10 object-contain"
              />
              <img
                src="https://readymadeui.com/images/american-express.webp"
                alt="card3"
                className="w-10 object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
