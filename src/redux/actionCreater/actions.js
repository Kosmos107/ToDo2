import {NEW_TODO_LIST,NEW_TODO_ERROR} from "./type"


export const addNewlistToDo = (val)=>{
    return{
        type:NEW_TODO_LIST,
        text:val
        
    }
}
export const getErrorlistToDo = (val)=>{
    return{
        type:NEW_TODO_ERROR,
        textError:val
    }
}