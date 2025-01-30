import React from "react";
import { Link } from "react-router-dom";

const NewProfile = () => {
  return (
    <Link
      to="/Create-User"
      className="bg-blue-800 py-1.5 px-4 text-white rounded-md">
      New Profile
    </Link>
  );
};

export default NewProfile;
