import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-gray-300 py-6 px-16 font-sans tracking-wide">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose">
          © Knickers. All rights reserved.
        </p>

        <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li>
            <Link to="/" className="text-[15px] hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-[15px] hover:text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="text-[15px] hover:text-white">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
