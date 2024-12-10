
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/",
      element: <Login/>
    },
  ])
  

  return (
    <>
    <Navbar></Navbar>
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
