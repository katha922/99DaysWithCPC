import { useState } from 'react'

import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState("katha")
  const [form,setForm]=useState({email:"", phone:""})

  const handleClick=()=>{
    alert("hey Click")
  }
  const handleMouseOver=()=>{
    alert("hey mouse over")
  }
  const handleChange=(e)=>{
    setName(e.target.value)
  }
  const handleChange2=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
    <div className='btn'>
      <button onClick={handleClick}>Click</button>
    </div>
    <div className="bg-red-600 h-20 w-20" onMouseOver={handleMouseOver} >
      red div
    </div>
    <input className='border-2 border-black' type='text' value={name} onChange={handleChange}></input>
    <input className='border-2 border-black' type='text' name='email' value={form.email} onChange={handleChange2}></input>
    <input className='border-2 border-black' type='text' name='phone' value={form.phone} onChange={handleChange2}></input>
  
    </>
  )
}

export default App
