import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="mt-5 flex flex-col gap-y-4">
      <div>
        <h1 className="font-semibold mb-2 text-lg">Avatar</h1>
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-14 h-14 object-cover"
        />
      </div>
      <div>
        <h1 className="font-semibold mb-1 text-lg">First Name</h1>
        <p>{user.firstName}</p>
      </div>
      <div>
        <h1 className="font-semibold mb-1 text-lg">Last Name</h1>
        <p>{user.lastName}</p>
      </div>
      <div>
        <h1 className="font-semibold mb-1 text-lg">Email</h1>
        <p>{user.email}</p>
      </div>
      <div>
        <h1 className="font-semibold mb-1 text-lg">Contact no.</h1>
        <p>{user.contact}</p>
      </div>
      <div>
        <h1 className="font-semibold mb-1 text-lg">Role</h1>
        <p>{user.role}</p>
      </div>
      <div>
        <h1 className="font-semibold mb-1 text-lg">Disabled</h1>
        <p>{user.type}</p>
      </div>
    </div>
  );
};

export default UserItem;
