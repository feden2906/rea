import {combineReducers} from "redux";
import {counterReduser} from "./counterReduser";
import {todosReduser} from "./todosReduser";

export const rootReduser = combineReducers({
    counterReduser,
    todosReduser
})