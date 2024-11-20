import './App.css'
import Count from './count';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked')
  }
  

  return (
    <>
      
      <h1>React Concept</h1>
      <Users></Users>
      <Count></Count>
      <button onClick={handleClick}>Click</button>
      <button onClick={()=>{alert('button 2 clicked')}}>Click2</button>
      
    </>
  )
}

export default App
