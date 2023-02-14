import { combineReducers } from "redux";
import { todoReducers } from "./todoReducer";
import { authRudecer  } from "./auth/Auth";
export const rootReducer = combineReducers({
    todoReducers,
    authRudecer
})