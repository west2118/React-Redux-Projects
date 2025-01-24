import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, actions) => {
      state.push(actions.payload);
    },
    doneTodo: (state, actions) => {
      const todo = state.find((todo) => todo.id === actions.payload);

      if (todo) {
        todo.done = !todo.done;
      }
    },
    editTodo: (state, actions) => {
      const { todoId, newTodoValue } = actions.payload;
      const todoToUpdate = state.find((todo) => todo.id === todoId);
      if (todoToUpdate) {
        todoToUpdate.todoList = newTodoValue;
      }
    },
    removeTodo: (state, actions) => {
      return state.filter((todo) => todo.id !== actions.payload);
    },
    removeDoneTodo: (state) => {
      return state.filter((todo) => todo.done !== true);
    },
    removeAllTodo: () => {
      return [];
    },
  },
});

export const {
  addTodo,
  removeTodo,
  editTodo,
  doneTodo,
  removeDoneTodo,
  removeAllTodo,
  setTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
