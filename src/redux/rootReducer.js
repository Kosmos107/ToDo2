import { combineReducers } from "redux";
import { ToDoReducer } from "./Reducer/ToDoReducer";
const rootReducer = combineReducers({
    ToDo:ToDoReducer,
})

export default rootReducer