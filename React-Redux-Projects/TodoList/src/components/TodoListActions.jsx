import React from "react";

const TodoListActions = ({ allTasks, doneTasks, todoTasks }) => {
  return (
    <div className="w-3/4 h-auto">
      <h1 className="text-2xl font-semibold mb-3">Todo List</h1>
      <div className="flex items-center gap-5">
        <button
          onClick={allTasks}
          className="w-full bg-cyan-500 text-white py-1.5 rounded-sm">
          All
        </button>
        <button
          onClick={doneTasks}
          className="w-full bg-cyan-500 text-white py-1.5 rounded-sm">
          Done
        </button>
        <button
          onClick={todoTasks}
          className="w-full bg-cyan-500 text-white py-1.5 rounded-sm">
          Todo
        </button>
      </div>
    </div>
  );
};

export default TodoListActions;
