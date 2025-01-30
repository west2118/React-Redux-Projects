import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../slice/profileSlice";

const ProfileItem = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">
        <img
          src={user.avatar}
          className="rounded-full h-10 w-10 self-center object-cover"
        />
      </td>
      <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
      <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
      <td className="border border-gray-300 px-4 py-2">{user.contact}</td>
      <td className="border border-gray-300 px-4 py-2">{user.email}</td>
      <td className="border border-gray-300 px-4 py-2">{user.role}</td>
      <td className="border border-gray-300 px-4 py-2">{user.type}</td>
      <td className="border border-gray-300 px-4 py-2 flex flex-wrap">
        <Link
          to={`/View-User/${user.id}`}
          className="m-2 px-2 py-1 text-white bg-green-500 rounded">
          View
        </Link>
        <Link
          to={`/Edit-User/${user.id}`}
          className="m-2 px-2 py-1 text-white bg-blue-500 rounded">
          Edit
        </Link>
        <button
          onClick={() => dispatch(deleteUser(user.id))}
          className="m-2 px-2 py-1 text-white bg-red-500 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProfileItem;
