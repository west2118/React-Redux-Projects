import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-t from-blue-200 via-blue-50 to-blue-50 my-10 py-20 px-4 font-[sans-serif]">
      <div className="max-w-4xl w-full mx-auto text-center">
        <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 leading-[45px]">
          Subscribe Our Newsletter
        </h2>
        <p className="text-base text-gray-600">
          Stay updated with our latest news and exclusive offers. Join our
          community today!
        </p>

        <div className="mt-12 bg-white flex items-center sm:p-4 p-2 max-w-xl mx-auto rounded-2xl border border-gray-300">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent py-4 px-2 text-gray-800 text-base border-none outline-none"
          />
          <button className="bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold py-4 px-4 sm:px-8 rounded-xl focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
