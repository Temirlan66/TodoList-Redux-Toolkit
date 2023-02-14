import {
  ADD_TODO,
  CHANGE_EDITING_TODO_ID,
  CHANGE_INPUT_VALUE,
  COMPLETE,
  DELETE_TODO,
  EDIT_STATUS,
  UPDATE_TODO,
} from "./action";

export const initialState = {
  todos: [],
  editingTodoId: null,
  editStatus: false,
  inputValue: "",
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        inputValue: "",
      };

    case EDIT_STATUS: {
      return {
        ...state,
        editStatus: action.payload,
      };
    }

    case CHANGE_EDITING_TODO_ID: {
      return {
        ...state,
        editingTodoId: action.payload,
      };
    }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case COMPLETE: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }

    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => todo.id === state.editingTodoId),
      };
    }
    default:
      return state;
  }
};
