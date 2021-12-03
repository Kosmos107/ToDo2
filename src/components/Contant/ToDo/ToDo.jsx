import s from "../Contant.module.scss"
import ListDo from "./ListDo"
import {addNewlistToDo,getErrorlistToDo} from "../../../redux/actionCreater/actions"
import { useDispatch,useSelector} from "react-redux"
import Error from "../../Error/Error"


const ToDo = (props)=>{
    const dispatch = useDispatch()
    const list = useSelector(state=>state.ToDo.list)
    const error = useSelector(state=>state.ToDo.error)
    const textError = useSelector(state=>state.ToDo.textError)
    debugger
    const addText=(val)=>{
        console.log(val)
        if(val.trim()){
            dispatch(addNewlistToDo(val))
        }else(
            dispatch(getErrorlistToDo("введите текст"))
        )
        
    }
    const key =(e)=>{
        if(e.keyCode===13){
            e.preventDefault()
            let val = e.target.value
            addText(val)
            e.target.value=""
        }
    }
    return  (
        <div className={s.ToDo__wrapper}>
            <div className={s.ToDo__Lists}>
            {list.map((arr,i)=>{
                return(
                <ListDo key={i} text={arr.text} date={arr.date} />
                )})}
            
            </div>
            <Error error={error} textError={textError} />
            <input onKeyDown={key}  className={s.ToDo__input}/>
        </div>
    )
}

export default ToDo