import React, { useState } from "react";
import SummaryItem from "../components/SummaryItem";
import { useDispatch, useSelector } from "react-redux";
import { shippingFee, taxFee } from "./CartPage";
import { useNavigate } from "react-router-dom";
import { checkoutCart } from "../store/cart-slice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.cart.items);
  const booksQuantity = useSelector((state) => state.cart.totalQuantity);
  const booksSubtotal = useSelector((state) => state.cart.subtotal);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  let total = booksSubtotal + shippingFee + taxFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const isFormDataEmpty = Object.values(formData).some(
      (values) => values.trim() === ""
    );
    if (isFormDataEmpty) {
      alert("Form data is incomplete. Please fill in all fields.");
      return;
    }

    const newData = {
      customerDetails: formData,
      items: books.map((book) => ({
        name: book.name,
        totalQuantity: book.quantity,
        totalPrice: book.totalPrice.toFixed(2),
      })),
      totalQuantity: booksQuantity.toFixed(2),
      totalPriceWtFee: total.toFixed(2),
    };

    const sendRequest = async () => {
      try {
        const response = await fetch(
          "https://cart-practice-f8e66-default-rtdb.firebaseio.com/booksOrders.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orders: newData,
            }),
          }
        );

        console.log(await response.json());
      } catch (error) {
        console.error(error);
      }
    };

    sendRequest();

    dispatch(checkoutCart());
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full justify-center">
        <div className="bg-gray-100 sm:h-auto sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {books &&
                  books.map((book) => (
                    <SummaryItem key={book.id} book={book} />
                  ))}
              </div>
            </div>

            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-200 w-full p-4 gap-y-2 flex flex-col">
              <h4 className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-800">
                Subtotal{" "}
                <span className="ml-auto">${booksSubtotal.toFixed(2)}</span>
              </h4>
              <h4 className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-800">
                Shipping{" "}
                <span className="ml-auto">${shippingFee.toFixed(2)}</span>
              </h4>
              <h4 className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-800">
                Tax <span className="ml-auto">${taxFee.toFixed(2)}</span>
              </h4>
              <div className="h-0.5 bg-white"></div>
              <h4 className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-800">
                Total <span className="ml-auto">${total.toFixed(2)}</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
          <h2 className="text-2xl font-bold text-gray-800">
            Complete your order
          </h2>
          <form className="mt-8">
            <div>
              <h3 className="text-sm lg:text-base text-gray-800 mb-4">
                Personal Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="contact"
                    onChange={handleChange}
                    value={formData.contact}
                    placeholder="Phone No."
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm lg:text-base text-gray-800 mb-4">
                Shipping Address
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={formData.address}
                    placeholder="Address Line"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                    placeholder="City"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    onChange={handleChange}
                    value={formData.state}
                    placeholder="State"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="zipCode"
                    onChange={handleChange}
                    value={formData.zipCode}
                    placeholder="Zip Code"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>

              <div className="flex gap-4 max-md:flex-col mt-8">
                <button
                  onClick={() => navigate("/cart")}
                  type="button"
                  className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">
                  Complete Purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
