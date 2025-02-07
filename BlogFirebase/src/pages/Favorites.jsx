import React from "react";
import BlogItem from "../components/BlogItem";
import { useSelector } from "react-redux";

const Favorites = () => {
  const blog = useSelector((state) => state.blog.blogs);

  const favoriteBlog = blog.filter((blogs) => blogs.favorite === true);

  return (
    <div className="w-full py-10 px-20 flex flex-col justify-center">
      <h1 className="text-2xl mb-4">Favorites</h1>
      <div className="w-full h-0.5 bg-gray-400"></div>

      <div className="container mt-10">
        {favoriteBlog.map((blogs) => (
          <BlogItem key={blogs.id} blog={blogs} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
