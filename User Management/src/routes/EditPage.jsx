import React, { useState } from "react";
import EditActionsButton from "../components/EditActionsButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../slice/profileSlice";

const EditPage = () => {
  const userList = useSelector((state) => state.userManagement.userList);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = userList.find((user) => user.id === parseInt(userId));
  const [selectedRole, setSelectedRole] = useState(user.role);
  const [selectedType, setSelectedType] = useState(user.type);

  const [formData, setFormData] = useState({
    avatar: user.avatar,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    contact: user.contact,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.contact
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newUserInfo = {
      ...formData,
      role: selectedRole,
      type: selectedType,
    };

    dispatch(editUser({ id: user.id, newUserInfo }));

    navigate("/");
  };

  const handleReset = () => {
    setFormData({
      avatar: user.avatar,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      contact: user.contact,
    });
    setSelectedRole(user.role);
    setSelectedType(user.type);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="w-11/12 lg:w-2/4 h-auto p-5 shadow-2xl bg-white rounded-md">
      <h1 className="text-2xl font-semibold">Edit User</h1>
      <div className="w-full mt-5 flex flex-col gap-y-4">
        <div>
          <h1 className="font-semibold mb-2 text-lg">Avatar</h1>
          <input
            type="text"
            name="avatar"
            className="border border-black w-full py-1.5 px-2.5"
            value={formData.avatar}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1 className="font-semibold mb-1 text-lg">First Name</h1>
          <input
            type="text"
            name="firstName"
            className="border border-black w-full py-1.5 px-2.5"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1 className="font-semibold mb-1 text-lg">Last Name</h1>
          <input
            type="text"
            name="lastName"
            className="border border-black w-full py-1.5 px-2.5"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1 className="font-semibold mb-1 text-lg">Email</h1>
          <input
            type="text"
            name="email"
            className="border border-black w-full py-1.5 px-2.5"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1 className="font-semibold mb-1 text-lg">Contact no.</h1>
          <input
            type="text"
            name="contact"
            className="border border-black w-full py-1.5 px-2.5"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1 className="font-semibold mb-1 text-lg">Role</h1>
          <div className="flex gap-5">
            <div className="flex items-center">
              <input
                defaultChecked={selectedRole === "User" ? true : false}
                type="radio"
                className="mr-1"
                id="user"
                name="role"
                value="User"
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <label htmlFor="user">User</label>
            </div>
            <div className="flex items-center">
              <input
                defaultChecked={selectedRole === "Admin" ? true : false}
                type="radio"
                className="mr-1"
                id="admin"
                name="role"
                value="Admin"
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <label htmlFor="admin">Admin</label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold mb-1 text-lg">Type</h1>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="admin"
              className="mr-1"
              checked={selectedType === "Yes"}
              onChange={(e) => setSelectedType(e.target.checked ? "Yes" : "No")}
            />
            <label htmlFor="admin">Disabled</label>
          </div>
        </div>

        <EditActionsButton
          handleEdit={handleEdit}
          handleReset={handleReset}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default EditPage;
