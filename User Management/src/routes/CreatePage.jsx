import React, { useState } from "react";
import CreateActionsButton from "../components/CreateActionsButton";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../slice/profileSlice";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const userList = useSelector((state) => state.userManagement.userList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("User");
  const [selectedType, setSelectedType] = useState("");

  const [formData, setFormData] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.contact
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newUser = {
      id: userList.length + 1,
      ...formData,
      role: selectedRole === "User" ? "User" : "Admin",
      type: selectedType ? "Yes" : "No",
    };

    console.log(newUser);

    dispatch(createUser(newUser));

    setFormData({
      avatar: "",
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
    });
    setSelectedRole("");
    setSelectedType("");

    navigate("/");
  };

  const handleCancel = () => {
    setFormData({
      avatar: "",
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
    });
    setSelectedRole("");
    setSelectedType("");

    navigate("/");
  };

  return (
    <div className="w-11/12 lg:w-2/4 h-auto p-5 shadow-2xl bg-white rounded-md">
      <h1 className="text-2xl font-semibold">Create User</h1>
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
                type="radio"
                id="user"
                name="role"
                value="User"
                className="mr-1"
                defaultChecked
                onChange={(e) => setSelectedRole(e.target.value)}
                required
              />
              <label htmlFor="user">User</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="admin"
                name="role"
                className="mr-1"
                value="Admin"
                required
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
              name="type"
              className="mr-1"
              onChange={(e) => setSelectedType(e.target.checked)}
            />
            <label htmlFor="type">Disabled</label>
          </div>
        </div>

        <CreateActionsButton
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default CreatePage;
