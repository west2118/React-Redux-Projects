import React from "react";
import { useDispatch } from "react-redux";
import { removeAllTodo, removeDoneTodo } from "../slice/todoSlice";

const TaskActions = () => {
  const dispatch = useDispatch();

  const deleteDoneHandler = () => {
    dispatch(removeDoneTodo());
  };

  const deleteTasksHandler = () => {
    dispatch(removeAllTodo());
  };

  return (
    <div className="w-3/4 h-auto">
      <div className="w-full flex gap-5 mt-2">
        <button
          onClick={deleteDoneHandler}
          className="w-full bg-red-600 text-white py-1.5 rounded-sm">
          Delete done tasks
        </button>
        <button
          onClick={deleteTasksHandler}
          className="w-full bg-red-600 text-white py-1.5 rounded-sm">
          Delete all tasks
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
