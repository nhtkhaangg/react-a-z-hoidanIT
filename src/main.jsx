import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/login.jsx'
import './styles/global.css'
import Users from './pages/users.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './pages/products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/users",
    element: <Users/>
  },

  {
    path: "/products",
    element: <Products/>
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
