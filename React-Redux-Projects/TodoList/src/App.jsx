import React, { useEffect } from "react";
import TaskActions from "./components/TaskActions";
import TodoInput from "./components/TodoInput";
import Todolists from "./components/Todolists";
import { useSelector } from "react-redux";

function App() {
  const todo = useSelector((state) => state.todo);

  return (
    <div className="h-screen w-full">
      <div className="w-full h-auto flex items-center justify-center text-center flex-col gap-y-5">
        <TodoInput />
        <Todolists />
        {todo.length >= 1 && <TaskActions />}
      </div>
    </div>
  );
}

export default App;
