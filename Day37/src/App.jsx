import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [cards,setCards]=useState([])

  const fetchData = async ()=>{
    let datas = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await datas.json()
    setCards(data)
    console.log(data)
 
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className='container grid grid-cols-3'>
        {cards.map((card)=>{
          return <div key={card.id} className='card border-black border-2 m-6 max-w-80'>
            <h1 className='text-blue-800'>{card.title}</h1>
            <p>{card.body}</p>
            </div>
        })}
      </div>
    </>
  )
}

export default App
