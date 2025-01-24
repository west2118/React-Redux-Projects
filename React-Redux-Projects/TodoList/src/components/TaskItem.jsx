import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneTodo, editTodo, removeTodo } from "../slice/todoSlice";

const TaskItem = ({ todoValue, todoDoneTask, todoId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoValue, setNewTodoValue] = useState(todoValue);
  const dispatch = useDispatch();

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveTodo = () => {
    setIsEditing(false);
    dispatch(editTodo({ todoId, newTodoValue }));
  };

  return (
    <div className="w-full border border-slate-300 p-2.5 flex items-center justify-between">
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={todoDoneTask}
          onChange={() => dispatch(doneTodo(todoId))}
        />
        {isEditing ? (
          <input
            type="text"
            value={newTodoValue}
            onChange={(e) => setNewTodoValue(e.target.value)}
            className="flex-auto w-full"
          />
        ) : (
          <p
            className={
              todoDoneTask === true ? "text-red-500 line-through" : "text-black"
            }>
            {todoValue}
          </p>
        )}
      </div>
      <div className="gap-2 flex">
        <button
          className="bg-red-600 text-white py-1 px-5 rounded-sm"
          onClick={() => dispatch(removeTodo(todoId))}>
          Delete
        </button>
        {!isEditing ? (
          <button
            onClick={startEditing}
            className="bg-green-600 text-white py-1 px-5 rounded-sm">
            Edit
          </button>
        ) : (
          <button
            onClick={saveTodo}
            className="bg-green-600 text-white py-1 px-5 rounded-sm">
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
