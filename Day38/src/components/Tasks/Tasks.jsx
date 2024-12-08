import { useState } from "react";


const Tasks = () => {

    const [todo,setTodo]=useState("")
    const [todos,setTodos]=useState([])

    const handleEdit=()=>{

    }

    const handleDelete=()=>{
        
    }

    const handleAdd=()=>{
        setTodos([...todos,{todo, isCompleted:false}])
        setTodo("")
        
    }

    const handleChange=(e)=>{
       
        setTodo(e.target.value)
        
    }



    return (
        <div className='container bg-violet-100  my-8 rounded-xl p-4 min-h-[60vh] mx-6 w-100vw'>
      <div className=' gap-2'>
        <h1 className='text-xl font-bold'>Add Todo</h1>
        <input onChange={handleChange} value={todo} type='text' className='w-1/2'></input>
        <button onClick={handleAdd} className='bg-blue-600 hover:bg-blue-900 p-2 py-1 text-white rounded-md mx-4 font-bold text-sm'>Add</button>
      </div>
      <div>
        <h1 className='font-bold text-xl'>Your Todos</h1>
      </div>
      <div className='todos'>
        {todos.map(item=>{

        
      return <div key={todo} className='todo flex gap-4 w-1/4 justify-between my-4'>
          <div className={item.isCompleted?"":"line-through"}>{item.todo}</div>
          <div className='btns flex'>
          <button onClick={handleEdit} className='bg-blue-600 hover:bg-blue-900 p-2 py-1 text-white rounded-md mx-2 font-bold text-sm'>Edit</button>
          <button onClick={handleDelete} className='bg-blue-600 hover:bg-blue-900 p-2 py-1 text-white rounded-md mx-2 font-bold text-sm'>Delete</button>
        </div>
        </div>
       })} 
      </div>
    </div>
        
    );
};

export default Tasks;