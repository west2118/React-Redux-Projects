import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../store/blogSlice";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    photo: "",
    title: "",
    description: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ...formData,
      id: Date.now(),
      favorite: false,
    };

    dispatch(addBlog(newBlog));

    navigate("/");
  };

  return (
    <div className="w-full py-10 px-20 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-3/4 shadow-xl p-8 flex flex-col gap-y-4">
        <label htmlFor="Photo" className="text-xl font-semibold">
          Photo
        </label>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          className="w-full border border-black py-2 px-2.5"
        />
        <label htmlFor="Title" className="text-xl font-semibold">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-black py-2 px-2.5"
        />
        <label htmlFor="Description" className="text-xl font-semibold">
          Description
        </label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-black py-2 px-2.5"
        />
        <label htmlFor="Username" className="text-xl font-semibold">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-black py-2 px-2.5"
        />
        <button
          type="submit"
          className="bg-blue-600 mt-2 py-2 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
