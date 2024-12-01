import {useState} from 'react';

const Count = () => {
    const [value,setValue]=useState(0)
    return (
        <div className="counter">
            <div className="value">{value}</div>
            <button onClick={()=>{setValue(value+1)}}>Click me</button>
        </div>
    );
};

export default Count;