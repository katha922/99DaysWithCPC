import { useState } from "react"

export default function Count(){
    const [counter,setCounter]=useState(0);
    const handleAdd=()=>{
        const newCounter = counter+1;
        setCounter(newCounter)

    }
    const handleReduce=()=>{
        const newCounter = counter-1;
        setCounter(newCounter)
    }
    return(
        
        <div style={{border:'2px solid red', margin:'10px'}}>
            <h3>Count: {counter}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}