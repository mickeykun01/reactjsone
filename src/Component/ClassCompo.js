import React from 'react'
import '../App.css'

class ClassCompo extends React.Component{
    render(){
        return(
                <div className='design1'>
                <h1>This is created using Class Component</h1>
                <p>This is done using External css</p>
                <p style={{color :"yellow"}}>This is done using inline css</p>
                </div>
           
            
           
        )
    }
};


export default ClassCompo;