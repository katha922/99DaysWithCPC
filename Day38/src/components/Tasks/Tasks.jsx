

const Tasks = () => {
    return (
        <div className='container bg-violet-100 mx-auto my-8 rounded-xl p-4 min-h-[80vh]'>
      <div className=' gap-2'>
        <h1 className='text-xl font-bold'>Add Todo</h1>
        <input type='text' className='w-1/2'></input>
        <button className='bg-blue-600 hover:bg-blue-900 p-2 py-1 text-white rounded-md mx-4 font-bold text-sm'>Add</button>
      </div>
      <div>
        <h1 className='font-bold text-xl'>Your Todos</h1>
      </div>
      <div className='todos'>
        <div className='todo flex gap-4'>
          <div className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
          <div className='btns'>
          <button className='bg-blue-600 hover:bg-blue-900 p-2 py-1 text-white rounded-md mx-2 font-bold text-sm'>Edit</button>
          <button className='bg-blue-600 hover:bg-blue-900 p-2 py-1 text-white rounded-md mx-2 font-bold text-sm'>Delete</button>
        </div>
        </div>
        
      </div>
    </div>
        
    );
};

export default Tasks;