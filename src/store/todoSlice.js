import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  todos: [],
  editingTodoId: null,
  editStatus: false,
  inputValue: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    InputValue(state, action) {
      state.inputValue = action.payload;
    },

    AddTodo(state, action) {
      console.log(action);
      state.todos = [...state.todos, action.payload];
      state.inputValue = "";
    },

    EditTodo(state, action) {
      state.editingTodoId = action.payload;
    },
    DeleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    Complete(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },

    Update(state, action) {
      state.todos = state.todos.map((todo) => todo.id === state.editingTodoId);
    },
  },
});

export const todoAction = todoSlice.actions;
