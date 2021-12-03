
import {Routes,Route} from "react-router-dom"

import ToDo from "./ToDo/ToDo"
import s from "./Contant.module.scss"



const Container =()=>{
    

    return(
        <div className={s.Contant__wrapper}>
        <Routes>
            <Route path="/Home" element={<div>Hello</div>} />
            <Route path="/Todo" element={<ToDo/>} />
            <Route path="/Home" element={<div>Hello</div>} />
        </Routes>
        </div>
    
   )
}
export default Container