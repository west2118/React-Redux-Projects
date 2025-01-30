import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileItem from "../components/ProfileItem";
import { searchUserList } from "../slice/profileSlice";

const ProfileLists = () => {
  const userList = useSelector((state) => state.userManagement.userList);
  const searchList = useSelector((state) => state.userManagement.searchList);

  const [userToDisplay, setUserToDisplay] = useState(userList);

  const [searchUser, setSearchUser] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchUser.length > 0) {
      setUserToDisplay(searchList);
    } else {
      setUserToDisplay(userList);
    }
  }, [searchUser, userList, searchList]);

  const searchHandler = (e) => {
    let value = e.target.value;
    setSearchUser(value);

    dispatch(searchUserList(value));
  };

  return (
    <>
      <div className="w-full flex items-end justify-end">
        <input
          type="text"
          placeholder="Search..."
          value={searchUser}
          onChange={searchHandler}
          className="w-1/5 border border-gray-400 mb-4 py-1.5 px-2.5 rounded-md"
        />
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              AVATAR
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              FIRST NAME
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              LAST NAME
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              CONTACT NO.
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              EMAIL
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">ROLE</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              DISABLED
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {userToDisplay.length > 0 ? (
            userToDisplay.map((user) => (
              <ProfileItem user={user} key={user.key} />
            ))
          ) : (
            <tr>
              <td
                colSpan={8}
                className="text-center py-4 font-semibold text-lg text-red-600">
                No User Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProfileLists;
