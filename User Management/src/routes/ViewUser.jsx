import React from "react";
import UserItem from "../components/UserItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewUser = () => {
  const userList = useSelector((state) => state.userManagement.userList);
  const { userId } = useParams();

  const user = userList.find((user) => user.id === parseInt(userId));

  console.log(user);

  return (
    <div className="w-11/12 h-auto p-5 shadow-2xl bg-white rounded-md">
      <h1 className="text-2xl font-semibold">View User</h1>
      <UserItem user={user} />
    </div>
  );
};

export default ViewUser;
