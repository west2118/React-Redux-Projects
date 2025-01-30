import React from "react";

const EditActionsButton = ({ handleEdit, handleReset, handleCancel }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={handleEdit}
        className="w-full py-2 bg-green-600 rounded-md text-white">
        Save
      </button>
      <button
        onClick={handleReset}
        className="w-full py-2 bg-red-600 rounded-md text-white">
        Reset
      </button>
      <button
        onClick={handleCancel}
        className="w-full py-2 bg-gray-600 rounded-md text-white">
        Cancel
      </button>
    </div>
  );
};

export default EditActionsButton;
