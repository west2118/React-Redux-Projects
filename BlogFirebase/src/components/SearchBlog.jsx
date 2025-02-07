import React from "react";

const SearchBlog = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value); // Call the function passed as a prop to update the search query
  };

  return (
    <input
      type="text"
      className="border border-gray-400 rounded-md w-3/5 py-1.5 px-2.5"
      placeholder="Search Blog..."
      onChange={handleChange}
    />
  );
};

export default SearchBlog;
