import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-800 w-full font-[sans-serif]">
      <div className="grid md:grid-cols-2 items-center md:max-h-[575px] overflow-hidden">
        <div className="p-8">
          <h1 className="sm:text-4xl text-2xl font-bold text-white">
            Explore the World of{" "}
            <span className="text-blue-400">Great Books</span>
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Discover a vast collection of books across all genres. Whether
            you're into fiction, self-improvement, or classic literature, find
            your next great read here.
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Unlock new stories, knowledge, and inspiration with every page you
            turn.
          </p>
          <div className="flex max-w-xs w-full mt-4 bg-gray-100 px-4 py-2 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent rounded outline-none pr-2 text-blue-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="cursor-pointer fill-gray-400">
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
        </div>
        <img
          src="https://c.wallhere.com/photos/da/42/women_model_books_reading_500px_Maks_Kuzin-23193.jpg!d"
          className="w-full h-full object-cover shrink-0"
        />
      </div>
    </div>
  );
};

export default Hero;
