import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [veiwbtn,setveiwbtn]=useState(true)
  const [lists,setLists]=useState([
    {
      id:1,
      title:"list-1",
      catagory: "math",
    },
    {
      id:2,
      title:"list-2",
      catagory:"physics"
    },
    {
      id:3,
      title:"list-3",
      catagory:"biology"
    },
  ])

  // const List = ()=>{return(<>
  // <div className="list">list-1</div></>)}

  const List=({list})=>{
    return(<>
    <div className='list'>{list.title}</div>
    <div className="list">{list.catagory}</div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {veiwbtn?<button>veiw</button>:"false"}
      {/* {veiwbtn && <button>veiw</button>} */}
      {lists.map(list=>{
        return<List list={list}></List>
      })}
      <div className="card">
        <button onClick={() =>setveiwbtn(!veiwbtn)}>
          Toggle veiwbtn
          {/* count is {count} */}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
