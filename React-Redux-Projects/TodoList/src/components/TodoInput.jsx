import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slice/todoSlice";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const newTodoHandler = async (e) => {
    e.preventDefault();

    if (!newTodo) return;

    const todo = {
      id: todos.length + 1,
      done: false,
      todoList: newTodo,
    };

    dispatch(addTodo(todo));

    setNewTodo("");
  };

  return (
    <div className="w-3/4 h-auto mt-5">
      <h1 className="text-2xl font-semibold mb-3">Todo Input</h1>
      <form
        className="w-full border border-slate-300 gap-y-4 rounded-md flex flex-col p-5"
        onSubmit={newTodoHandler}>
        <input
          type="text"
          placeholder="New Tasks"
          className="border border-slate-300 p-1.5 rounded-sm"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button className="bg-cyan-500 text-white py-1.5 rounded-sm">
          Add New Task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
