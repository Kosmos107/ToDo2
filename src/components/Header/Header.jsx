import s from "./Header.module.scss"
import { Link } from "react-router-dom"

const Header =(props)=>{
    
    const massLink =[
        {title:"Home",id:1},
        {title:"Catalog",id:2},
        {title:"Coments",id:3}
    ]

    return(
    <div className={s.wrapper}>
        <ul className={s.nav}>
            {massLink.map((arr=><li><Link to={arr.title} key={arr.id}>{arr.title}</Link></li>))}
        </ul>
    </div>)
}
export default Header