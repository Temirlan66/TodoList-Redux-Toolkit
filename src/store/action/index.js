export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE = "COMPLETE";
export const UPDATE_TODO = "UPDATE_TODO";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const EDIT_STATUS = "EDIT_STATUS";
export const CHANGE_EDITING_TODO_ID = "CHANGE_EDITING_TODO_ID";
export const changeInputValue = (payload) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload,
  };
};

export const editStatus = (payload) => {
  return {
    type: EDIT_STATUS,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const changeEditingTodoId = (payload) => {
  return {
    type: CHANGE_EDITING_TODO_ID,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const completedPosts = (payload) => {
  return {
    type: COMPLETE,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
