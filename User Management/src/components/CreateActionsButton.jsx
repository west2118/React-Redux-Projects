import React from "react";

const CreateActionsButton = ({ handleSubmit, handleCancel }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-green-600 rounded-md text-white">
        Create
      </button>
      <button
        onClick={handleCancel}
        className="w-full py-2 bg-gray-600 rounded-md text-white">
        Cancel
      </button>
    </div>
  );
};

export default CreateActionsButton;
