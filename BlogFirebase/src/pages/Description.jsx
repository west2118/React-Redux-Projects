import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog } from "../store/blogSlice";

const Description = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogId } = useParams();
  const blog = useSelector((state) => state.blog.blogs);

  const blogDetails = blog.find((blogs) => blogs.id === parseInt(blogId));

  const handleDelete = () => {
    dispatch(deleteBlog(blogDetails.id));

    navigate("/");
  };

  return (
    <div className="w-full flex justify-center items-center">
      {blogDetails && (
        <div className="w-9/12 h-auto my-10 mx-20 flex flex-col gap-y-4">
          <div className="w-full flex items-center justify-between">
            <h1 className="w-fit py-1 px-4 border border-gray-400 ">
              {blogDetails.username}
            </h1>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white py-1 px-4 rounded-md">
              Delete
            </button>
          </div>
          <img
            src={blogDetails.photo}
            alt=""
            className="w-full h-96 object-cover"
          />
          <h1 className="text-3xl font-bold">{blogDetails.title}</h1>
          <p>{blogDetails.description}</p>
        </div>
      )}
    </div>
  );
};

export default Description;
