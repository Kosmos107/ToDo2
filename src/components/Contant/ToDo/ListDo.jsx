import s from "../Contant.module.scss"


const ListDo = ({text,date})=>{
    return(
        <>
        
        <label  className={s.List__wrapper}>
            <input type="checkbox"  className={s.List__delet} />
            <div className={s.List__mark}></div>
            <p className={s.List__text}>
            {text}
            </p>
            <span>{date}</span>
        </label>
        </>
    )
}


export default ListDo