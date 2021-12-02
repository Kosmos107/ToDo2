
import React,{useState} from "react"
import {Routes,Route} from "react-router-dom"
import { useDispatch,useSelector} from "react-redux"




const Container =()=>{
    
    const [count,setCount] = useState(25)

    

    console.log(count)
    return(
    <div className="container">
        <div onClick={()=>{setCount(count+1)}} style={{height:"30px",border:"5px solid red",margin:"20px"}}>
            {count}
        </div>
        <Routes>
            <Route path="/Home" element={<div>Hello</div>} />
        </Routes>

    
    </div>)
}
export default Container