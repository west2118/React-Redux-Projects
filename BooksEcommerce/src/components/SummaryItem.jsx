import React from "react";

const SummaryItem = ({ book }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-200 rounded-md">
        <img src={book.image} className="w-full object-contain" />
      </div>
      <div className="w-full">
        <h3 className="text-sm lg:text-base text-gray-800">Echo Elegance</h3>
        <ul className="text-xs text-gray-800 space-y-1 mt-3">
          <li>
            Quantity <span className="float-right">{book.quantity}</span>
          </li>
          <li>
            Total Price{" "}
            <span className="float-right">${`${book.totalPrice}`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummaryItem;
