import React from "react";

const EditBlog = () => {
  return (
    <div className="w-full py-10 px-20 flex flex-col items-center justify-center">
      <form action="" className="w-3/4 shadow-xl p-8 flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="Photo" className="text-xl font-semibold">
            Photo
          </label>
          <input
            type="text"
            name="Photo"
            className="w-full border border-black py-2 px-2.5"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="Title" className="text-xl font-semibold">
            Title
          </label>
          <input
            type="text"
            name="Title"
            className="w-full border border-black py-2 px-2.5"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="Description" className="text-xl font-semibold">
            Description
          </label>
          <input
            type="text"
            name="Description"
            className="w-full border border-black py-2 px-2.5"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="Username" className="text-xl font-semibold">
            Username
          </label>
          <input
            type="text"
            name="Username"
            className="w-full border border-black py-2 px-2.5"
          />
        </div>
        <button className="bg-blue-600 mt-2 py-2 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
