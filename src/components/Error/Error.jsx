import s from "./Error.module.scss"
import cn from "classnames"



const Error = ({textError="тут будет ошибка",error})=>{
    debugger
    const ErrorClass =cn(s.Error__wrapper,{[s.Error__show]:error})
    return(
        <div className={ErrorClass}>
           <div className={s.Error__item}>{textError}</div>
        </div>
    )
}


export default Error