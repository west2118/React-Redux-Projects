import React, { useState } from "react";
import SearchBlog from "../components/SearchBlog";
import BlogItem from "../components/BlogItem";
import { useSelector } from "react-redux";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const blogs = useSelector((state) => state.blog.blogs);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const dataToDisplay = searchQuery.length > 0 ? filteredBlogs : blogs;

  return (
    <div className="w-full py-10 px-20 flex flex-col items-center justify-center">
      <SearchBlog onSearch={handleSearchChange} />
      <div className="container mt-10">
        {dataToDisplay && dataToDisplay.length > 0 ? (
          dataToDisplay.map((blog) => <BlogItem key={blog.id} blog={blog} />)
        ) : (
          <h1 className="text-center text-2xl font-semibold">
            No Blog Available!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Homepage;
