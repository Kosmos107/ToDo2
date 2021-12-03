
import {NEW_TODO_LIST,NEW_TODO_ERROR} from "../actionCreater/type"

const initState= {
    list:[{text:"234",date:new Date().toLocaleDateString()}],
    error:false
}

export const ToDoReducer = (state=initState,action)=>{
    switch(action.type){
        case NEW_TODO_LIST:
            return{
                ...state,
                list:[...state.list,{text:action.text,date:new Date().toLocaleDateString()}],
                error:false
            }
            case NEW_TODO_ERROR:
                return{
                    ...state,
                    error:true,
                    textError:action.textError
                }
            
        default:
             return state       
    }

}
