import { todoAction } from "../todoSlice";

export const changeInputValue = (payload) => {
  return {
    type: todoAction.InputValue,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: todoAction.AddTodo,
    payload,
  };
};

export const changeEditingTodoId = (payload) => {
  return {
    type: todoAction.EditTodo,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: todoAction.DeleteTodo,
    payload,
  };
};

export const completedPosts = (payload) => {
  return {
    type: todoAction.Complete,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: todoAction.Update,
    payload,
  };
};
