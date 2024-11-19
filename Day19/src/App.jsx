import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="learn react"></Todo>
      <Device name='laptop' price='55'></Device>
      <Device name='mobile' price='17000'></Device>
      <Person></Person>
      <Student grade="5" score="90"></Student>
      <h2>this</h2>
      <Css></Css>
      
    </>
  )
}
function Device(props){
  console.log(props)
  return <h2>device: {props.name} price: {props.price} </h2>
}
function Person(){
  const age=22;
  const student ={name:'human',age:'100'}
  return <h3>student name is {student.name}. age is: {age}</h3>
}

const {grade,score}={grade:'7',score:'99'};
function Student({grade,score}){
  console.log(grade,score);
  return(
    <div className='student'>
      <h3>student</h3>
      <p>name: {grade} </p>
      <p>age: {score} </p>
    </div>
  )
}

function Css(){
  return(
    <div className='Style'>
      <h1>Style</h1>
      <p>css come from App css</p>
    </div>
  )
}

export default App
