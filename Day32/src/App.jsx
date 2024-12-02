import { useEffect, useState } from 'react'

import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    alert("hello")

  },[])


  useEffect(()=>{
    alert("clicked count")

  },[count])

  return (
    <>
    <Nav color={"blue" + "red"}></Nav>
      
      <div className="counter">
            <div className="count">{count}</div>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>
        </div>
    </>
  )
}

export default App
