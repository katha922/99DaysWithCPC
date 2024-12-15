import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Nav.jsx';
import User from './components/User.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Nav/><Home/></>,
  },

  {
    path: "/user/:username",
    element: <User></User>,
  },
  {
    path: "/about",
    element: <><Nav/><About/></>,
  },
  {
    path: "/contact",
    element: <><Nav/><Contact/></>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
