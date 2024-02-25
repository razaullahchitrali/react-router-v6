import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import './index.css'
import Root from './routes/root';
import Error from './error';
import Contact from './contact';

const router =createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<Error/>
  },
  {
    path:"/contact",
    element:<Contact/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
