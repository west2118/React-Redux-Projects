import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { favoriteBlog } from "../store/blogSlice";

const BlogItem = ({ blog }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-5 rounded-md shadow-xl max-w-xl flex flex-col gap-y-2">
      <img
        src={blog.photo}
        alt=""
        className="w-full h-60 object-cover rounded-md"
      />
      <div className="flex justify-between items-center  mt-2 -mb-1">
        <p className="text-gray-400">{blog.username}</p>
        <button
          onClick={() => dispatch(favoriteBlog(blog.id))}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md">
          {blog.favorite === true ? "Saved" : "Save"}
        </button>
      </div>
      <h1 className="text-2xl font-semibold">{blog.title}</h1>
      <Link
        to={`/blog-details/${blog.id}`}
        className="w-full text-center py-2 bg-green-800 hover:bg-green-900 mt-2 text-white rounded-md shadow-md">
        View Details
      </Link>
    </div>
  );
};

export default BlogItem;
