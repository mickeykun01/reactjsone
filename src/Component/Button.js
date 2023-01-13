import ClassCompo from './ClassCompo';
import FunctionalComp from './FunctionalComp';
import { useState } from 'react';
import '../App.css'


function Button() {
    let [change1, setchange1] = useState(false)
    let [change2, setchange2] = useState(false)


return(
    <div className='parent'>
        <div>
        <button className='funcbtn' onClick={()=>{setchange1(!change1) }}>To see Styling in function Component</button>
        {change1 && <FunctionalComp/>}
        </div>

        <div>
        <button className='compbtn' onClick={()=>{setchange2(!change2) }}>To see Styling in class Component</button>
        {change2 && <ClassCompo/>}
        </div>
    </div>
)
}

export default Button;