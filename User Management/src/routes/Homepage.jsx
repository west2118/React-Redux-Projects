import React from "react";
import NewProfile from "../components/NewProfile";
import CountPages from "../components/CountPages";
import ProfileLists from "../components/ProfileLists";

const Homepage = () => {
  return (
    <div className="w-full h-auto p-5 shadow-2xl bg-white rounded-md">
      <h1 className="text-xl font-semibold mb-3">User Management</h1>
      <NewProfile />
      <ProfileLists />
      <CountPages />
    </div>
  );
};

export default Homepage;
