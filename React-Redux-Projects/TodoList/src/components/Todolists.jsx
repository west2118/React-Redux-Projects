import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TodoListActions from "./TodoListActions";
import { useSelector } from "react-redux";

const Todolists = () => {
  const todos = useSelector((state) => state.todo);
  const [filteredTasks, setFilteredTasks] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filteredTasks === "done") return todo.done;
    if (filteredTasks === "todo") return !todo.done;
    return true;
  });

  const hasTodos = todos.length > 0;
  const hasDoneTasks = todos.some((todo) => todo.done);
  const hasPendingTasks = todos.some((todo) => !todo.done);

  return (
    <>
      <TodoListActions
        allTasks={() => setFilteredTasks("all")}
        doneTasks={() => setFilteredTasks("done")}
        todoTasks={() => setFilteredTasks("todo")}
      />
      <div className="w-3/4 h-auto">
        <div className="w-full h-auto flex flex-col gap-4 mt-2">
          {hasTodos ? (
            <>
              {filteredTodos.map((todo) => (
                <TaskItem
                  key={todo.id}
                  todoValue={todo.todoList}
                  todoDoneTask={todo.done}
                  todoId={todo.id}
                />
              ))}
              {filteredTasks === "done" && !hasDoneTasks && (
                <h1 className="text-xl font-semibold text-red-600">
                  Finish your task!
                </h1>
              )}
              {filteredTasks === "todo" && !hasPendingTasks && (
                <h1 className="text-xl font-semibold text-red-600">
                  No completed task yet
                </h1>
              )}
            </>
          ) : (
            <h1 className="text-xl font-semibold text-red-600">
              No Task Available
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Todolists;
